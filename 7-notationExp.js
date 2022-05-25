//* notação big O igual a exponencial
/*
    _ A entrada irá passar 2^n vezes, onde n é o valume de entrada
*/
const iterationNumber = 2;
const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}
const timer = `Timer`;
console.time(timer);
// function Exponencial(data, controlFlag = 1) {
//   console.log(`-> passou por aqui ${controlFlag} vez (zes)`);
//   let n = 2;
//   if (data === controlFlag) {
//     return n;
//   } else {
//     controlFlag++;
//     return (n *= Exponencial(data, controlFlag));
//   }
function notationExp(data, controlFlag = 1) {
  const iterator = Math.pow(2, data.length);
  for (let i = 0; i < iterator; i++, controlFlag++) {
    console.log(`-> passou por aqui ${controlFlag} vez (zes)`);
    console.timeLog(timer);
  }
}

// console.log(`2 elevado a ${iterationNumber} é:`, Exponencial(iterationNumber));
notationExp(array);
console.timeEnd(timer);
