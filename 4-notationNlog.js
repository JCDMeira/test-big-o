//* notação big O igual a n log de n
/*
    _ passa n vezes o log da entrada.
    _ tem uma parte do algoritmo que é log, o laço externo que tem
    _ um número de iterações que diminui bem mais rápido, para 8 iŕa passar 3 vezes
    _ para 24 passa apenas 4 vezes.
    _ seguida de uma parte n que passa o mesmo número do volume de entrada
*/

const timer = `Timer`;

function notationNLog(n, controlFlag = 1, controlFlag2 = 1) {
  let y = n;
  while (n > 1) {
    n = Math.floor(n / 2);
    console.log(`-> passou pela parte log : ${controlFlag} `);
    controlFlag++;
    for (let i = 1; i <= y; i++) {
      console.log(`-> passou pela parte n:  ${controlFlag2} `);
      controlFlag2++;
      console.timeLog(timer);
    }
  }
}

console.time(timer);

notationNLog(24);

console.timeEnd(timer);
