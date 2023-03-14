const inputContainer = document.getElementById('input-container'); //show and hide containers
const countdownForm = document.getElementById('countdownForm'); //get the results from input fields
const dateEl = document.getElementById('date-picker'); //show and hide container

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive; // needed for setInterval

// Units of time in milliseconds format
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date input min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown | Complete UI
function updateDom() {
    countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour); // return the left over after the initial number
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
    }, second);
}

// Value from form input
function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
    // Get number version of current date | update DOM
    countdownValue = new Date(countdownDate).getTime();
    console.log('value:', countdownValue);
    updateDom();
}

// Reset All values
function reset() {
    // hide countdown and show input
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    // Stop the countdown
    clearInterval(countdownActive);
    // Reset the values 
    countdownTitle = '';
    countdownDate = '';
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);


