import { generateAndWriteRandomNumbersToFile } from './generatorNumbers';
import randomNumbers from './randomNumbers.json';

false && generateAndWriteRandomNumbersToFile();

type FindMaxMinResult = { max: number, min: number }

const findMaxMin = (listNumbers: number[]): FindMaxMinResult => {
  let max: number = listNumbers[0];
  let min: number = listNumbers[0];

  const count = listNumbers.length / 2;

  for (let iBegin = 0, iEnd = listNumbers.length - 1; iBegin < count; iBegin++, iEnd--) {
    const elBegin = listNumbers[iBegin];
    const elEnd = listNumbers[iEnd];

    if (elBegin > max) {
      max = elBegin;
    } else if (elBegin < min) {
      min = elBegin;
    }

    if (elEnd > max) {
      max = elEnd;
    } else if (elEnd < min) {
      min = elEnd;
    }
  }

  return { max, min }
}

const result = findMaxMin(randomNumbers);

console.log('result:', result)
