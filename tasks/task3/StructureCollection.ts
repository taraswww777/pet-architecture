export type Comparator<TItem = number> = (a: TItem, b: TItem) => 0 | -1 | 1;

const defaultComparator: Comparator<number> = (a, b) => {
  console.log('a === b:', a , b);
  if (a === b) return 0;
  if (a > b) return 1;

  return -1;
};

/**
 * Коллекция, хранящая отсортированные значения.
 */
export class StructureCollection<TItem = number> {
  private readonly __listData: TItem[] = [];
  private readonly __comparator: Comparator<TItem> = defaultComparator as Comparator<TItem>;

  /**
   * Создаёт новую коллекцию.
   * @param initValue Начальные значения.
   * @param comparator Компаратор для сортировки.
   */
  constructor(initValue: TItem[] = [], comparator: Comparator<TItem> = defaultComparator as Comparator<TItem>) {
    this.__comparator = comparator;
    initValue.sort(comparator);
    this.__listData = initValue;
  }

  get listData() {
    return this.__listData;
  }

  has(value:TItem):boolean{
    return this.findIndexByValue(value) !== -1
  }

  getItem(index: number) {
    return this.__listData[index];
  }

  addItem(newItem: TItem) {
    const index = this.__findIndexForInsertNewItemByValue(newItem);

    return this.__listData.splice(index, 0, newItem);
  }

  __findIndexForInsertNewItemByValue(newValue: TItem): number {
    let low = 0;
    let high = this.__listData.length;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      // @ts-expect-error по факту всё будет работать
      if (this.__comparator(this.__listData[mid], newValue) < 0) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return low;
  }


  findIndexByValue(value: TItem): number {
    let low = 0;
    let high = this.__listData.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      // @ts-expect-error по факту всё будет работать
      const comparison = this.__comparator(this.__listData[mid], value);

      if (comparison === 0) {
        return mid;
      } else if (comparison < 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  }


  removeAt(index: number) {
    return this.__listData.splice(index, 1);
  }
}
