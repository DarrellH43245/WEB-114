// Darrell Holtz 5-12-2025
'use strict';

const questions = 
[{ questionText: 'Who is my favorite character?', 
answers: [
    {answerText: 'Sheik', isCorrect:false},
    {answerText: 'Snake', isCorrect:false},
    {answerText: 'Zero Suit Samus', isCorrect:true},
    {answerText: 'Wolf', isCorrect:false}
]},
{ questionText: 'Which one of these stages is NOT legal in the Smash Ultimate unified ruleset?', 
answers: [
    {answerText: 'Battlefield', isCorrect:false},
    {answerText: 'Hollow Bastion', isCorrect:false},
    {answerText: 'Pokemon Stadium', isCorrect:true},
    {answerText: 'Pokemon Stadium 2', isCorrect:false}
]},

{ questionText: 'Which character has NOT been banned in the competitive history of Smash?', 
answers: [
    {answerText: 'Bayonetta', isCorrect:false},
    {answerText: 'Meta Knight', isCorrect:false},
    {answerText: 'Ice Climbers', isCorrect:true},
    {answerText: 'Steve', isCorrect:false}
]},

{ questionText: 'Which of of these Smash bros players is considered the greatest of all time?', 
answers: [
    {answerText: 'Hungrybox', isCorrect:false},
    {answerText: 'Mew2king', isCorrect:false},
    {answerText: 'Mkleo', isCorrect:true},
    {answerText: 'ZeRo', isCorrect:false}
]},

{ questionText: 'Which one of these character do I NOT enjoy fighting the most?', 
answers: [
    {answerText: 'Sonic', isCorrect:false},
    {answerText: 'Little Mac', isCorrect:false},
    {answerText: 'Diddy Kong', isCorrect:true},
    {answerText: 'Pacman', isCorrect:false}
]},

{ questionText: 'What Smash game has tripping as a universal mechanic?', 
answers: [
    {answerText: 'Super Smash Bros Melee', isCorrect:false},
    {answerText: 'Super Smash Bros Ultimate', isCorrect:false},
    {answerText: 'Super Smash Bros Brawl', isCorrect:true},
    {answerText: 'Super Smash Bros for 3DS/Wii U', isCorrect:false}
]},

{ questionText: 'Who is my favorite player of all time?', 
answers: [
    {answerText: 'WebbJP', isCorrect:false},
    {answerText: 'Tweek', isCorrect:false},
    {answerText: 'Marss', isCorrect:true},
    {answerText: 'Hurt', isCorrect:false}
]},

{ questionText: 'What archetype is best described by fast paced aggression and overwhelming advantage state?', 
answers: [
    {answerText: 'Hit and Run', isCorrect:false},
    {answerText: 'Brawler', isCorrect:false},
    {answerText: 'Rushdown', isCorrect:true},
    {answerText: 'Swordie', isCorrect:false}
]},

{ questionText: 'Which character best fits the Trapper archetype?', 
answers: [
    {answerText: 'Samus', isCorrect:false},
    {answerText: 'Olimar', isCorrect:false},
    {answerText: 'Snake', isCorrect:true},
    {answerText: 'Captain Falcon', isCorrect:false}
]},

{ questionText: 'Which game developer is the head director for the Super Smash Bros series?', 
answers: [
    {answerText: 'Todd Howard', isCorrect:false},
    {answerText: 'Shigeru Miamoto', isCorrect:false},
    {answerText: 'Masahiro Sakurai', isCorrect:true},
    {answerText: 'Gabe Newell', isCorrect:false}
]}];

const liveQuestions=[];
let currentQuestionNumber = 1;
let responses = [];

for(let i = 0; i < 10; i++){

    let z = getRandom (0 , 9 - i);
    let liveQuestionText = questions[z].questionText;
    let liveQuestionAnswers = [];

    for(let j = 0; j < 4; j++){        
        let y = getRandom (0 , 3 - j);
        questions[z].answers[y].answerLetterValue = getAnswerLetterValue(j);
        liveQuestionAnswers.push(questions[z].answers[y]);
        questions[z].answers.splice(y,1);
    }

    liveQuestions.push({
        questionText: liveQuestionText,
        answers: liveQuestionAnswers
    });
    questions.splice(z , 1)
}

renderQuestion();

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAnswerLetterValue(i){

    switch (i) {
        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2:
            return 'C';
        case 3:
            return 'D';
        default:
            return '';
    }
}

function enableNextButton(){
    document.getElementById('nextButton').disabled=false;
}

function nextButtonClick(){
    const selectedAnswer = document.querySelector('input[name=quizAnswers]:checked').value;
    const correctAnswer = liveQuestions[currentQuestionNumber - 1].answers.find(item => !!item.isCorrect).answerLetterValue;
    responses.push({
        questionNumber: currentQuestionNumber,
        selectedAnswer: selectedAnswer,
        correctAnswer: correctAnswer
    });
    
    if(currentQuestionNumber === 10){
        calculateTotal();
    } else {
        currentQuestionNumber++;
        document.getElementById('nextButton').disabled=true;
        const radioButtons = document.querySelectorAll('input[name=quizAnswers]');
        radioButtons.forEach (radio => radio.checked = false)
        renderQuestion();
    }
}

function renderQuestion(){
    const questionNumberSpan = document.getElementById('questionNumberSpan');
    const questionTextSpan = document.getElementById('questionTextSpan');
    const answerTextA = document.getElementById('answerTextA');
    const answerTextB = document.getElementById('answerTextB');
    const answerTextC = document.getElementById('answerTextC');
    const answerTextD = document.getElementById('answerTextD');

    questionNumberSpan.textContent = `${ currentQuestionNumber }. `;
    questionTextSpan.textContent = liveQuestions[currentQuestionNumber - 1].questionText;
    answerTextA.textContent = liveQuestions[currentQuestionNumber - 1].answers[0].answerText;
    answerTextB.textContent = liveQuestions[currentQuestionNumber - 1].answers[1].answerText;
    answerTextC.textContent = liveQuestions[currentQuestionNumber - 1].answers[2].answerText;
    answerTextD.textContent = liveQuestions[currentQuestionNumber - 1].answers[3].answerText;
}

function calculateTotal(){
    const gradeTable = document.getElementById('gradeTable');
    const scoreSpan = document.getElementById('scoreSpan');
    let studentScore = 0;
    responses.forEach(item => {
        if(item.selectedAnswer === item.correctAnswer){
            studentScore++;
            addTableRow(item, gradeTable, true);
        } else {
            addTableRow(item, gradeTable, false);
        }
    });

    scoreSpan.textContent = studentScore
    document.getElementById('questionDiv').style.display = 'none';
    document.getElementById('gradeDiv').style.display = 'block';
}

function addTableRow(item, table, isCorrect){
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    cell1.textContent = item.questionNumber;
    cell2.textContent = item.selectedAnswer;
    cell3.textContent = item.correctAnswer;
    cell2.style.color = !!isCorrect ? 'green' : 'red';
}