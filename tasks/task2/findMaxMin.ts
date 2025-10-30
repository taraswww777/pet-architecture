import { generateAndWriteRandomNumbersToFile } from './generatorNumbers';
import randomNumbers from './randomNumbers.json';

false && generateAndWriteRandomNumbersToFile();

type FindMaxMinResult = { max: number, min: number }

export const findMaxMin = (listNumbers: number[]): FindMaxMinResult => {
  if (listNumbers.length === 0) throw new Error('Array is empty');

  let max: number = listNumbers[0];
  let min: number = listNumbers[0];

  if (listNumbers.length===1){
    return { max, min }
  }

  const count = listNumbers.length / 2;

  for (let iBegin = 0, iEnd = listNumbers.length - 1; iBegin < count; iBegin++, iEnd--) {
    const elBegin = listNumbers[iBegin];
    const elEnd = listNumbers[iEnd];


    if (elBegin > elEnd){
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
