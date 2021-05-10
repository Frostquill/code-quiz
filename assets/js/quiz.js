var start = document.getElementById("Start");
var time = document.getElementById("Time");

var questions = [
    {q: 'Javascript '}
]



function countdown() {
    var timeLeft = 5;

    var quizTimer = setInterval(function() {
        if (timeLeft > 0) {
            time.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } 
        else if (timeLeft === 0) {
            time.textContent = "your out of time!";
            clearInterval(quizTimer);
            
        }
        
       
    }, 1000);
    
}

start.onclick = countdown;
