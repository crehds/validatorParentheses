function resetResults() {
  let inputs = document.getElementById('inputs-box');
  let results = document.getElementById('results-box');
  let reason = document.getElementById('reasons-box');
  let inputText = document.getElementById('form');

  inputs.innerHTML = ('');
  results.innerHTML = ('');
  reason.innerHTML = ('');
  
  inputText.reset();
}
