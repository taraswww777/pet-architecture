function ternarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const third = Math.floor((right - left) / 3);
        const mid1 = left + third;
        const mid2 = right - third;

        if (arr[mid1] === target) {
            return mid1; // Число найдено
        } else if (arr[mid2] === target) {
            return mid2; // Число найдено
        } else if (target < arr[mid1]) {
            right = mid1 - 1; // Ищем в левой трети
        } else if (target > arr[mid2]) {
            left = mid2 + 1; // Ищем в правой трети
        } else {
            left = mid1 + 1;
            right = mid2 - 1; // Ищем в средней трети
        }
    }

    return -1; // Число не найдено
}

// Пример использования:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetNumber = 7;

const ternaryIndex = ternarySearch(sortedArray, targetNumber);
console.log(ternaryIndex); // Выведет: 3
