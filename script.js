var guess = Math.round(Math.random()*100);
var output = document.getElementById('textLabel');

var random = document.getElementById('attemptCount')
var guessCount = 9;
var i;
function check() {

    if (guessCount != 0) {
        var num = document.getElementById('textBox').value;
    
    if(num==guess) {
        location.href = "win.html";
    }
    else if(num>guess) {
        output.innerHTML="Your guess is too high!";
    }
    else if(num<guess) {
        output.innerHTML = "Your guess is too low";
    }
    guessCount--;
    random.innerHTML= guessCount;
    }
    else if (guessCount == 0) {
        location.href = "lose.html";
        return;
    }
}