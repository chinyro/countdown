const inputContainer = document.getElementById('input-container'); //show and hide containers
const countdownForm = document.getElementById('countdownForm'); //get the results from input fields
const dateEl = document.getElementById('date-picker'); //show and hide container

// Set Date input min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);