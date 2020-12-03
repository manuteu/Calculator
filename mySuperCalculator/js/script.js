function start() {
  const inputA = document.querySelector('#inputA');
  const inputB = document.querySelector('#inputB');

  inputA.addEventListener('keyup', calculations);
  inputB.addEventListener('keyup', calculations);
}

function calculations() {
  const inputA = parseInt(document.querySelector('#inputA').value, 10);
  const inputB = parseInt(document.querySelector('#inputB').value, 10);

  //Apelidar os elementos HTML

  const htmlElements = {
    sum: document.querySelector('#sum'),
    subAB: document.querySelector('#subAB'),
    subBA: document.querySelector('#subBA'),
    AxB: document.querySelector('#AxB'),
    AdivB: document.querySelector('#AdivB'),
    BdivA: document.querySelector('#BdivA'),
    AxA: document.querySelector('#AxA'),
    BxB: document.querySelector('#BxB'),
    divIntA: document.querySelector('divIntA'),
    divIntB: document.querySelector('divIntB'),
    Afactorial: document.querySelector('Afactorial'),
    Bfactorial: document.querySelector('Bfactorial'),
  };

  //Cálculos números inteiros e fatoriais
  function divInt(number) {
    let divList = [];
    for (let i = 0; i < number; i++) {
      if (number % i === 0) divList.push(i);
    }
    return divList;
  }
  function factorial(number) {
    if (number > 21) {
      return 'Número muito grande!';
    } else {
      if (number < 0) return -1;
      else if (number == 0) return 1;
      else {
        return number * factorial(number - 1); //Testar sem factorial
      }
    }
  }
  // Atribuição dos valores
  // Soma A e B
  htmlElements.sum.value = inputA + inputB;
  // Subtração A e B
  htmlElements.subAB.value = inputA - inputB;
  // Subtração B e A
  htmlElements.subBA.value = inputB - inputA;
  // Multiplicação A e B
  htmlElements.AxB.value = inputA * inputB;
  // Divisão A e B
  htmlElements.AdivB.value = inputA / inputB;
  // Divisão B e A
  htmlElements.BdivA.value = inputB / inputA;
  // Potência de A
  htmlElements.AxA.value = inputA * inputA;
  // Potência de B
  htmlElements.BxB.value = inputB * inputB;
  // Divisores inteiros de A
  htmlElements.divIntA.value =
    divInt(inputA) + ' (' + divInt(inputA).length + ')';
  // Divisores inteiros de B
  htmlElements.divIntB.value =
    divInt(inputB) + ' (' + divInt(inputB).length + ')';
  // Fatorial de A
  htmlElements.Afactorial.value = factorial(inputA);
  // Fatorial de B
  htmlElements.Bfactorial.value = factorial(inputB);
}

start();
