const inputContainer = document.getElementById('input-container'); //show and hide containers
const countdownForm = document.getElementById('countdownForm'); //get the results from input fields
const dateEl = document.getElementById('date-picker'); //show and hide container

let countDownTitle = '';
let countDownDate = '';

// Set Date input min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Value from form input
function updateCountdown(event) {
    event.preventDefault();
    countDownTitle = event.srcElement[0].value;
    countDownDate = event.srcElement[1].value;
    console.log(countDownTitle, countDownDate);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);


