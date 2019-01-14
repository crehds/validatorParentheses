function results(solution) {
  let answer = document.getElementById('results-box');
  let p = document.createElement('p');
  
  if (solution.estado) {
    answer.appendChild(p);
    p.innerHTML = solution.estado;
  } else {
    answer.appendChild(p);
    p.innerHTML = solution.estado;
  }
}

function printInput(element) {
  let input = document.getElementById('inputs-box');
  let p = document.createElement('p');

  input.appendChild(p);

  if (isEmpty(element.value)){
    p.innerHTML = `' '`;
  } else {
    p.innerHTML = element.value;
  }
}

function printReason(object) {

  let input = document.getElementById('reasons-box');
  let p = document.createElement('p');

  input.appendChild(p);
  p.innerHTML = object.reason;
}
