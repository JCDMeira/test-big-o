//* notação big O igual a 1
/*
    _ não importa o volume da entrada, sempre irá passar apenas uma vez no bloco de código
*/
const timer = "HaWk-timer-1";

console.time(timer);
function NotationOne(data, controlFlag = 0) {
  console.log(data, `-> passou por aqui ${controlFlag + 1} vez (zes)`);
  console.timeLog(timer);
}

NotationOne([1, 2, 3, 4, 5]);
console.timeEnd(timer);
