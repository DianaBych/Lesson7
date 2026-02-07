/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

function transformArray(arr: (number | number[])[]): number[] {
  const strArray = array.join();
  const strResult = strArray.split(",");
  const result = [];
  for (let i = 0; i < strResult.length; i++) {
    result.push(Number(strResult[i]));
  }
  return result;
}

console.log(transformArray(array));
