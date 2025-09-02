function karySearch(arr: number[], target: number, k: number): number {
  if (k < 2) {
    throw new Error('Количество частей должно быть больше или равно 2');
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const parts = [];
    for (let i = 1; i < k; i++) {
      parts.push(left + Math.floor((i * (right - left)) / k));
    }

    for (let i = 0; i < parts.length; i++) {
      if (arr[parts[i]] === target) {
        return parts[i]; // Число найдено
      }
    }

    if (target < arr[parts[0]]) {
      right = parts[0] - 1; // Ищем в левой части
    } else if (target > arr[parts[parts.length - 1]]) {
      left = parts[parts.length - 1] + 1; // Ищем в правой части
    } else {
      for (let i = 0; i < parts.length - 1; i++) {
        if (target > arr[parts[i]] && target < arr[parts[i + 1]]) {
          left = parts[i] + 1;
          right = parts[i + 1] - 1;
          break;
        }
      }
    }
  }

  return -1; // Число не найдено
}

// Пример использования:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetNumber = 7;
const k = 3; // Количество частей

const karyIndex = karySearch(sortedArray, targetNumber, k);
console.log(karyIndex); // Выведет: 3
