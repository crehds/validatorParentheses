let form = document.getElementById('form');
let reset = document.getElementById('button-reset');

form.addEventListener('submit', main);
reset.addEventListener('click', resetResults);

function main(event) {

  event.preventDefault();

  const dato = document.getElementById('in');
  printInput(dato);
  let initial = {
    estado: true,
    reason: '',
  };

  let solution = basicValidate(dato, initial);
  
  if (solution.estado) {
    solution = especialValidate(dato, initial);
  }

  results(solution);
  printReason(solution);
}
