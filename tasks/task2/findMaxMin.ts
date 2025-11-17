import { generateAndWriteRandomNumbersToFile } from './generatorNumbers';
import randomNumbers from './randomNumbers.json';

false && generateAndWriteRandomNumbersToFile();

type FindMaxMinResult = { max: number, min: number }

export const findMaxMin = (listNumbers: number[]): FindMaxMinResult => {
  if (listNumbers.length === 0) throw new Error('Array is empty');

  let max: number;
  let min: number;

  if (listNumbers.length === 1) {
    max = listNumbers[0] as number;
    min = listNumbers[0] as number;
  } else {
    // @ts-expect-error всё работает
    if (listNumbers[0] > listNumbers[1]) {
      max = listNumbers[0] as number;
      min = listNumbers[1] as number;
    } else {
      max = listNumbers[1] as number;
      min = listNumbers[0] as number;
    }
  }

  for (let i = 2; i < listNumbers.length; i += 2) {
    let elBegin: number;
    let elEnd: number;

    // Обработка случая, когда остался только один элемент
    if (i + 1 >= listNumbers.length) {
      elBegin = listNumbers[i] as number;
      elEnd = listNumbers[i] as number;
    } else {
      elBegin = listNumbers[i] as number;
      elEnd = listNumbers[i + 1] as number;
    }

    if (elBegin > elEnd) {
      if (elBegin > max) {
        max = elBegin;
      }
      if (elEnd < min) {
        min = elEnd;
      }
    } else {
      if (elEnd > max) {
        max = elEnd;
      }
      if (elBegin < min) {
        min = elBegin;
      }
    }
  }

  return { max, min }
}

const result = findMaxMin(randomNumbers);

console.log('result:', result)
