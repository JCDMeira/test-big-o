//* notação big O igual a n
/*
    _ Vai passar uma vez por cada pedaço do volume de entrada.
    _ se o tamanho for 1, passa uma vez. Se for 100 passa 100 vezes.
*/
const array = [];

for (let i = 0; i < 100; i++) {
  array.push(i);
}

const timer = `Timer`;

console.time(timer);
function NotationN(data, controlFlag = 0) {
  for (let i = 0; i < data.length; i++, controlFlag++) {
    console.log(data[i], `-> passou por aqui ${controlFlag + 1} vez (zes)`);
    console.timeLog(timer);
  }
}

// NotationN([1]);
NotationN(array);
console.timeEnd(timer);
