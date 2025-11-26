export type Comparator<TItem = number> = (a: TItem, b: TItem) => 0 | -1 | 1;

const defaultComparator: Comparator<number> = (a, b) => {
  console.log('a === b:', a , b);
  if (a === b) return 0;
  if (a > b) return 1;

  return -1;
};

export class StructureCollection<TItem = number> {
  private __listData: TItem[] = [];
  private readonly __comparator: Comparator<TItem> = defaultComparator as Comparator<TItem>;

  constructor(initValue: TItem[] = [], comparator: Comparator<TItem> = defaultComparator as Comparator<TItem>) {
    this.__comparator = comparator;
    initValue.forEach((item: TItem) => {
      this.__listData.push(item);
    })
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

  __findIndexForInsertNewItemByValue(newValue: TItem) {
    const length = this.__listData.length;
    let index = length;


    if(length===0){
      return index;
    }

    for (let i = 0; i < length; i++) {
      // @ts-expect-error по факту всё будет работать
      if(this.__comparator(this.__listData[i], newValue) >= 0){
        index = i;
        break;
      }
    }

    return index;
  }

  findIndexByValue(value: TItem) {
    return this.__listData.findLastIndex((item: TItem) => this.__comparator(item, value) === 0);
  }

  removeAt(index: number) {
    return this.__listData.splice(index, 1);
  }
}
