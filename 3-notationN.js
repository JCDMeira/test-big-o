//* notação big O igual a 1
/*
    _ não importa o volume da entrada, sempre irá passar apenas uma vez no bloco de código
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
