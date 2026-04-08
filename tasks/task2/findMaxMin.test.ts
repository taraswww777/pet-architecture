import { findMaxMin } from './findMaxMin';

function testFindMaxMin(arr: number[], expected: { max: number, min: number }, problemDescription: string) {
    try {
        const result = findMaxMin(arr);
        if (result.max === expected.max && result.min === expected.min) {
            console.log(`\x1b[32mSuccess for array [${arr}]: Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}\x1b[0m`);
        } else {
            console.log(`\x1b[31mError for array [${arr}]: Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}\x1b[0m`);
        }
    } catch (error) {
        console.log(`\x1b[31mError for array [${arr}]: ${error.message}\x1b[0m`);
    }
    console.log(`\x1b[34mProblem: ${problemDescription}\x1b[0m`);
}

testFindMaxMin([42], { max: 42, min: 42 }, "если код не обрабатывает случай, когда длина массива равна 1, может упасть или вернуть некорректные значения.");

testFindMaxMin([3, 1, 4], { max: 4, min: 1 }, "цикл работает некорректно, пропуская некоторые элементы. Например, элемент arr[1] = 1 не обрабатывается!");

testFindMaxMin([5, 5, 2, 2], { max: 5, min: 2 }, "из-за использования `else if` при `elBegin === max` проверка на `min` пропускается.");

testFindMaxMin([10, 1, 20, 5], { max: 20, min: 1 }, "при обработке с концов элемент `1` (индекс 1) может не обновиться из-за логики `else if`.");

testFindMaxMin([10, 20, 5], { max: 20, min: 5 }, "элемент `5` (индекс 2) — центральный, не обрабатывается в цикле.");

testFindMaxMin([7, 7, 7, 7], { max: 7, min: 7 }, "из-за `else if` ни одно обновление не произойдёт после первого элемента.");
