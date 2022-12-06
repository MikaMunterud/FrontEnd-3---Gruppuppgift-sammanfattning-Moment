function setClock(lang) {
  console.log('setClock');
  console.log(lang);
  console.log(setInterval);
  clearInterval(setInterval);
  setInterval(tick, 1000);
  
}


function changeDateTime(event) {
  console.log('changeDateTime');
  console.log(event.target.getAttribute('id'));
  lang= event.target.getAttribute('id');
  setClock(lang);
}
function tick(lang) {
  moment().format();
  moment.locale(lang);
  let time = moment().format("MMMM Do YYYY, h:mm:ss a");
  document.getElementById("demo").innerHTML = time;
  
}

window.onload = function () {
  let lang = 'sv';
  document.getElementById('switcher').addEventListener('change', changeDateTime);
  setClock(lang);
}


// ======= LEAP YEAR CHECK =========

const moment = require('moment');




