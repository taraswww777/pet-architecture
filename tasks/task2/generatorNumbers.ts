import { faker } from '@faker-js/faker';
import fs from 'fs';
import * as path from 'path';

// Функция для генерации массива случайных чисел
function generateRandomNumbers(count: number, min: number, max: number): number[] {
    const numbers: number[] = Array(count).fill(0);

    for (let i = 0; i < count; i++) {
        // Генерируем случайное число в заданном диапазоне
        numbers[i] = faker.number.int({ min, max });
    }

    console.log('numbers:',numbers)
    return numbers;
}

// Интерфейс для параметров функции
interface GenerateOptions {
    count?: number;
    min?: number;
    max?: number;
    filePath?: string;
}

export function generateAndWriteRandomNumbersToFile(options: GenerateOptions = {}): void {
    const {
        count = 10,
        min = 1,
        max = 100,
        filePath = path.join(__dirname, './randomNumbers.json')
    } = options;

    // Генерируем массив случайных чисел
    const randomNumbers = generateRandomNumbers(count, min, max);

    // Преобразуем массив в строку JSON
    const jsonString = JSON.stringify(randomNumbers, null, 2);

    // Записываем JSON строку в файл
    fs.writeFile(filePath, jsonString, (err) => {
        if (err) {
            console.error('Ошибка при записи файла:', err);
        } else {
            console.log(`Файл успешно создан по пути: ${filePath}`);
        }
    });
}
