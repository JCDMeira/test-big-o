//* notação big O igual a n ao cubo
/*
    _ Passa pelo bloco o número de entrada ao cubo.
    _ Se vier uma entrada de tamanho 2, passará 4. Se vier 10, passará 1000.
*/
const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}

const timer = `Timer`;

console.time(timer);
function NotationN(data, controlFlag = 0) {
  for (let i = 0; i < data.length; i++) {
    for (let z = 0; z < data.length; z++) {
      for (let j = 0; j < data.length; j++, controlFlag++) {
        console.log(data[i], `-> passou por aqui ${controlFlag + 1} vez (zes)`);
        console.timeLog(timer);
      }
    }
  }
}

// NotationN([1]);
NotationN(array);
console.timeEnd(timer);
