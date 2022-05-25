//* referência -> https://gabrielschade.github.io/2019/06/16/algoritmos-i.html

const array = [];

for (let i = 1; i <= 10000000; i++) {
  array.push(i);
}

const timer = `Timer`;

function binarySearch(array, value, controlFlag = 1) {
  let first = 0;
  let last = array.length - 1;
  let index = 0;
  while (first <= last) {
    console.log(`-> passou por aqui ${controlFlag} vez (zes)`);
    controlFlag++;
    console.timeLog(timer);
    index = parseInt((first + last) / 2);
    if (value > array[index]) {
      first = index + 1;
    } else if (value < array[index]) {
      last = index - 1;
    } else if (array[index] === value) {
      return true;
    }
  }
  return false;
}

console.time(timer);

const bs = binarySearch(array, 51092);
console.log(bs);

console.timeEnd(timer);
