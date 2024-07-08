document.querySelector('#tikla').addEventListener('click', init);
function init() {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => { 
      let advice = res.slip.advice;     
      let numara = res.slip.id;     
      document.querySelector('#advice').innerHTML =  `
      <p>ADVICE #${numara}</p> <h3>“${advice}”</h3><span></span>`
    });}
init();