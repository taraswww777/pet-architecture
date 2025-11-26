import { StructureCollection } from './StructureCollection';

const task3Run = ()=>{
const collection = new StructureCollection([1,2,3,4,5]);

  const indexValue = collection.findIndexByValue(5);

  console.log('indexValue:', indexValue);
}

task3Run();
