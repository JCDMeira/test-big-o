//* notação big O igual a fatorial
/*
    _ não importa o volume da entrada, sempre irá passar apenas uma vez no bloco de código
*/
const iterationNumber = 6;
const array = [];

for (let i = 1; i <= 7; i++) {
  array.push(i);
}

const timer = `Timer`;

// console.time(timer);
function Fatorial(data, controlFlag = 1) {
  // console.log(`-> passou por aqui ${controlFlag} vez (zes)`);
  // console.timeLog(timer);
  controlFlag++;
  if (data === 1) {
    return data;
  } else {
    return (data *= Fatorial(data - 1, controlFlag));
  }
}
const fatorialResult = Fatorial(array.length);
console.log(`Fatorial de ${array.length} é:`, fatorialResult);

function NotationFat(fatorialOfData, controlFlag = 1) {
  for (let i = 0; i < fatorialOfData; i++, controlFlag++) {
    console.log(`-> passou por aqui ${controlFlag} vez (zes)`);
    console.timeLog(timer);
  }
}

console.time(timer);
NotationFat(fatorialResult);

console.timeEnd(timer);
