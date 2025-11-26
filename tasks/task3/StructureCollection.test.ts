import { type Comparator, StructureCollection } from './StructureCollection';

const customComparator: Comparator<number> = (a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;

    return -1;
};

describe('StructureCollection', () => {
    let collection: StructureCollection<number>;

    beforeEach(() => {
        collection = new StructureCollection<number>([], customComparator);
    });

    test('добавление элемента', () => {
        collection.addItem(5);
        expect(collection.getItem(0)).toBe(5);
    });

    test('добавление нескольких элементов', () => {
        collection.addItem(5);
        collection.addItem(3);
        collection.addItem(8);
        expect(collection.getItem(0)).toBe(3);
        expect(collection.getItem(1)).toBe(5);
        expect(collection.getItem(2)).toBe(8);
    });

    test('получение элемента по индексу', () => {
        collection.addItem(5);
        collection.addItem(3);
        collection.addItem(8);
        expect(collection.getItem(1)).toBe(5);
    });

    test('проверка наличия элемента', () => {
        collection.addItem(5);
        collection.addItem(3);
        collection.addItem(8);
        expect(collection.has(5)).toBe(true);
        expect(collection.has(10)).toBe(false);
    });

    test('поиск индекса элемента', () => {
        collection.addItem(5);
        collection.addItem(3);
        collection.addItem(8);
        expect(collection.findIndexByValue(5)).toBe(1);
        expect(collection.findIndexByValue(10)).toBe(-1);
    });

    test('удаление элемента по индексу', () => {
        collection.addItem(5);
        collection.addItem(3);
        collection.addItem(8);
        collection.removeAt(1);
        expect(collection.getItem(0)).toBe(3);
        expect(collection.getItem(1)).toBe(8);
        expect(collection.getItem(2)).toBeUndefined();
    });

    test('добавление элемента в правильном порядке', () => {
        const numbers = [3, 5, 8, 10, 10, 11, 19, 20];

        collection.addItem(numbers[1]);
        collection.addItem(numbers[3]);
        collection.addItem(numbers[2]);
        collection.addItem(numbers[5]);
        collection.addItem(numbers[0]);
        collection.addItem(numbers[4]);
        collection.addItem(numbers[7]);
        collection.addItem(numbers[6]);

        const listData = JSON.stringify(collection.listData);
        expect(listData).toBe(JSON.stringify(numbers));
    });
});
