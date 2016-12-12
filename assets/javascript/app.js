// alert("hello!");

var timeRemaining = 20;
var counter;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// create start button
var startButton = $("<div>").addClass("btn btn-success btn-lg").addClass("startButton");
startButton.html("Start!");
$("#triviaGame").prepend(startButton);
// $('.startbutton').click(start);
//Why isn't the start button appearing?
// Why isn't the start button responding to click when I create a button in HTML?



// Timer Functions
// this function will start the counter and remove the start button
function start () {
    counter = setInterval(decrement, 1000);
};

// this function is for the timer, and when it runs out, it stops counting
function decrement(){
    timeRemaining--;
    $('#time').html("<h2>" + timeRemaining + "</h2>");
    if (timeRemaining===0) {
        stop();
        timeUp();
    }
};

function stop() {
    clearInterval(counter);
};

start();
// Array (Object?) of questions, choices & correct answers
var trivia = [
        {
            question: 'In "Rudolph the Red Nosed Reindeer", what did Hermie the Elf want to be?',
            choices: ["Santa", "Doctor", "Dentist"],
            correctChoice: 2
        },
        {
            question: 'In "A Charlie Brown Christmas", what did Lucy want for Christmas?',
            choices: ["A Doll", "Real Estate", "Charlie Brown"],
            correctChoice: 1
        },
        {
            question: 'In "A Garfield Christmas", what did Odie give Garfield for Christmas?',
            choices: ["Lasagna", "Santa Hat", "Back Scratcher"],
            correctChoice: 2
        },
        {
            question: 'In "How the Grinch Stole Christmas", how many sizes did the Grinch\'s heart grow at the end?',
            choices: ["3", "5", "7"],
            correctChoice: 0
        },
        {
            question: 'In "Frosty the Snowman", what did Frosty say every time he came to life?',
            choices: ["Hey Kids!", "Happy Birthday!", "Where Am I?"],
            correctChoice: 1
        },
        {
            question: 'In "Jack Frost", what was Jack\'s last name when he became a human?',
            choices: ["Snip", "Bauer", "Horner"],
            correctChoice: 0
        },
        {
            question: 'In "Mickey\'s Christmas Carol", which Disney character was the Ghost of Christmas Past?',
            choices: ["Jiminy Cricket", "Goofy", "Willy the Giant"],
            correctChoice: 0
        },
        {
            question: 'In "Santa Claus is Coming to Town", what is the name of the villain?',
            choices: ["Coldheart", "Emmet Otter", "Burgermeister Meisterburger"],
            correctChoice: 2
        }
    ];


for (var i = 0; i < trivia.length; i++){
//shows selected question
    $("#questionDiv").html("<h2>" + trivia[currentQuestion].question + "</h2>");
    var correctAnswer = trivia[currentQuestion].correctChoice;
    // var answerChosen = 

 // show answer choices

 // when an answer is chosen, show another page with the correct response & a gif
 if (answerChosen === correctAnswer) {

};

 // click the next button to move to the next question

};


// function timeUp () {
//     $('#trivia').empty();
    
// };