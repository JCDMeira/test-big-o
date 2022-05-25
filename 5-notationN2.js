//* notação big O igual a n ao quadrado
/*
    _ Passa pelo bloco o número de entrada ao quadrado.
    _ Se vier um tamanho 2, passará 4. Se vier 10, passará 100
*/
const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}

const timer = `Timer`;

console.time(timer);
function NotationN(data, controlFlag = 0) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++, controlFlag++) {
      console.log(data[i], `-> passou por aqui ${controlFlag + 1} vez (zes)`);
      console.timeLog(timer);
    }
  }
}

// NotationN([1]);
NotationN(array);
console.timeEnd(timer);
