const isEmpty = (string) => {
  if (string == '') {
    return true;
  }
}

// const isNotAParentheses = (string) => {
//   if (string.match(/[^\)\(]/))
//   console.log();
// }

const basicValidate = (input, object) => {
  const string = input.value;
  let estado = true;
  let reason = '';

  if (isEmpty(string)) {
    estado = false;
    reason  = 'Vacío'
  } else if (string.match(/^[\)]/)) {
    estado = false;
    reason = `')' al principio`;
  } else if (string.match(/[\(]$/)) {
    estado = false;
    reason = `'(' al final`;
  } else if (string.length % 2 != 0) {
    estado = false;
    reason = `Número impar de paréntesis`;
  }

  return object = {
    estado: estado,
    reason: reason,
  };
};

function especialValidate(input, object) {

  const arrayforIterations = input.value.split('');
  let pila = [];
  let position = 0;
  let balanceFlag = true;

  while (position < arrayforIterations.length) {

    let symbol = arrayforIterations[position];

    if (symbol == '(') {
      pila.push(symbol);
    } else {

      if (pila.length == 0) {
        balanceFlag = false;
      } else {
        pila.pop();
      }

    }

    position++;
  }

  if (pila.length == 0 && balanceFlag === true) {
    return object = {
      estado: true,
      reason: 'Balanceados',
    };
  } else {
    return object = {
      estado: false,
      reason: 'Desbalanceados',
    };
  }

}
