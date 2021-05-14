var start = document.getElementById("Start");
var time = document.getElementById("Time");
var score = document.getElementById("Score");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var question = document.getElementById("question");
var allButtons = document.getElementsByClassName("clickme");
var scoreInput = document.getElementById("highScore");

var questions = [
    
    {
        q: "Javascript identifiers are case sensitive.",
        choiceA: "true",
        choiceB: "false",
        choiceC: "",
        choiceD: "",
        a: "true",
    },
    {
        q: "What does NaN stand for?",
        choiceA: "Not-a-Number",
        choiceB: "No-action-Noted",
        choiceC: "Number-at-Null",
        choiceD: "None of the above",
        a: "Not-a-Number",
    },
    {
        q: "select which method would callback a function",
        choiceA: "thisfunction{};",
        choiceB: "thisfunction();",
        choiceC: "(thisfunction[]);",
        choiceD: "//thisfunction;",
        a: "thisfunction();",
    },
    {
        q: "what does the keyword var refer to?",
        choiceA: "function",
        choiceB: "if",
        choiceC: "variable",
        choiceD: "callback",
        a: "variable",
    },
    {
        q: "JavaScript is a scripting language",
        choiceA: "true",
        choiceB: "false",
        choiceC: "",
        choiceD: "",
        a: "true",
    },
];

var timeLeft = 40;
var index = 0;
var score2 = 0;

function countdown() {
    confirm("Are you ready?");
    alert("Go!");

    var quizTimer = setInterval(function () {
        if (timeLeft > 0) {
            time.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0) {
            time.textContent = "Times Up!";
            clearInterval(quizTimer);
        }
    }, 1000);
    takeQuiz();
};

function displayQuestion() {
    document.getElementById("question").innerHTML = questions[index].q;
    document.getElementById("answer1").innerHTML = questions[index].choiceA;
    document.getElementById("answer2").innerHTML = questions[index].choiceB;
    document.getElementById("answer3").innerHTML = questions[index].choiceC;
    document.getElementById("answer4").innerHTML = questions[index].choiceD;
    document.getElementById("Score").innerHTML = "Score: " + score2;

    index++;
};

var takeQuiz = function() {
   
    displayQuestion();
};

var removeQues = function() {
    document.getElementById("q's").style.display = "none";
    highScores();

}
// else do the code in the bottom
for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        var currentAnswer = questions[index - 1].a;
        
        var userSelectedAnswer = this.innerText;
        
        if (currentAnswer != userSelectedAnswer) {
            timeLeft = timeLeft - 10;
        }else {
            score2 = score2 + 10;
        }

        if (index > questions.length - 1) {
            alert("no more questions!");
            timeLeft = 0;
            removeQues();

        } else {
            displayQuestion();
        }
        
    
    });
    
};







var highScores = function() {
    
    scoreInput.setAttribute('style', 'background-color:lightgrey;');
    var scoreHead = document.createElement("h2");
    scoreHead.textContent = "Input your High Score!";
    scoreHead.setAttribute('style', 'margin:auto; width:100%; text-align:center; font-size:40px;');
    scoreInput.appendChild(scoreHead);

    var scores = document.createElement('div');
    var listEl = document.createElement('ol');
    listEl.setAttribute('style', 'display:flex; flex-direction:column; align-items:center; margin:0;');
    scoreInput.appendChild(scores);
    scores.appendChild(listEl);
    
    firstPlace();
};



var firstPlace = function() {
    var first = document.createElement('li');
    first.setAttribute('style', 'font-size:25px; margin-left:45%; padding-top:20px;  height:50px; list-style-type:decimal;')
    first.setAttribute('id', 'first');
    scoreInput.appendChild(first);
    
    
   
   

   //debugger;
    if ('first'.innerText === undefined ) {
    alert("congrats on hitting first place!");
    var initial = prompt('put in your initials!');
    first = initial + '--' +  score2;
    localStorage.setItem('score1', first);
    
   } else {
    
    }
     var firstKey = localStorage.getItem('score1');
    document.getElementById('first').innerText = firstKey;
   
}




start.onclick = countdown;
