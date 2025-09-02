function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Число найдено
        } else if (arr[mid] < target) {
            left = mid + 1; // Ищем в правой половине
        } else {
            right = mid - 1; // Ищем в левой половине
        }
    }

    return -1; // Число не найдено
}

// Пример использования:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetNumber = 7;
const index = binarySearch(sortedArray, targetNumber);
console.log(index); // Выведет: 3
