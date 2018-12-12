/*event.preventDefault(); use this as needed */
var displayNumbers = [];
var display = document.getElementById('display');

function keypad(value) { /* how to get the keypad to work */
    if (value) { 
        display.textContent += value;
    }
}

function del() { /* delete the displayed numbers */
    var numDisplay = document.getElementById('display').textContent;
    numDisplay = numDisplay.split('');
    numDisplay.pop();
    numDisplay = numDisplay.join('');
    display.textContent = numDisplay; 
}


function opening() {
    var greeting = "Welcome to the Bank of Satch. Enter your card.";
    var message = document.getElementById('output');
    message.textContent = greeting;
    checkCard();
}

function checkCard() {
    var card = 0;

}