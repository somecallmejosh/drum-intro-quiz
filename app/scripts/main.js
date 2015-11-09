!function(){
var audio = document.querySelectorAll('.audio-player');
var audioSource = document.querySelector('.audioSource');

function updateAudio(sourceUrl){
  audioSource.setAttribute('src', "audio/" + sourceUrl + ".mp3");
  audio[0].pause();
  audio[0].load();
}

function Question(questionText, correctAnswer, answerOption1, answerOption2, answerOption3, answerOption4) {
  this.questionText = questionText,
  this.correctAnswer = correctAnswer,
  this.answerOptions = [answerOption1, answerOption2, answerOption3, answerOption4]
}

var q1 = new Question('bh', "Brick House", "Brick House", "Bill Bruford", "Phil Collins", "Keith Moon");
var q2 = new Question('fw', "Fifty Ways To Leave Your Lover", "Terry Bozzio", "Adrian Young", "fw", "Fifty Ways To Leave Your Lover");
var q3 = new Question('hft', "Hot For Teacher", "rr", "Bill Bruford", "Hot For Teacher", "Keith Moon");
var q4 = new Question('r', "Roseanna", "Terry Bozzio", "Roseanna", "fw", "Eric Kretz");
var q5 = new Question('rr', "Rock and Roll", "Rock and Roll", "Bill Bruford", "Phil Collins", "Keith Moon");
var q6 = new Question('rwy', "Rock With You", "Terry Bozzio", "Adrian Young", "Rock With You", "Eric Kretz");
var q7 = new Question('s', "Superstition", "rr", "Superstition", "Phil Collins", "Keith Moon");
var q8 = new Question('sbs', "Sunday Bloody Sunday", "Terry Bozzio", "Sunday Bloody Sunday", "fw", "Eric Kretz");
var q9 = new Question('sss',  "Sing Sing Sing", "rr", "Bill Bruford", "Phil Collins", "Sing Sing Sing");
var q10 = new Question('tp', "Two Princes", "Two Princes", "Adrian Young", "fw", "Eric Kretz");
var q11 = new Question('wo', "Wipe Out", "rr", "Bill Bruford", "Wipe Out", "Keith Moon");

var data = {
  questionsArray:[q1, q2, q3,q4,q5,q6,q7,q8,q9,q10,q11],
  currentNumber: 0,
  numberCorrect: 0,
  currentQuestion: q1,
  setCurrentQuestion: function(){
    this.currentQuestion = this.questionsArray[this.currentNumber]
  }
}

var controller = {
  iterateQuestion: function(button){
    var userGuess = button.text();
    if(userGuess == data.currentQuestion.correctAnswer){
      data.numberCorrect++
    }
    data.currentNumber++
    if(data.currentNumber == data.questionsArray.length){
      view.quizDone();
    } else {
      data.setCurrentQuestion();
      view.render();
    }
  }
}

var view = {
  init: function(){
    // declare an empty audioPlayer object, to be filled with render
    this.audioPlayer;
    this.button1 = $('.quiz-option-one');
    this.button2 = $('.quiz-option-two');
    this.button3 = $('.quiz-option-three');
    this.button4 = $('.quiz-option-four');
    this.questionNumber = $('.number');
    this.questionTotal = $('.total');
    this.quizCompleteStatement = $('.quiz-complete');
    this.questionTotal.text(data.questionsArray.length);
    this.correctAnswers = $('.correct-total');
    // sniff sniff... Code smell?
    $('.quiz-button').click(function(){
      controller.iterateQuestion($(this));
    });
    view.render();
  },
  render: function(){
    this.audioPlayer = updateAudio(data.currentQuestion.questionText);
    this.button1.text(data.currentQuestion.answerOptions[0]);
    this.button2.text(data.currentQuestion.answerOptions[1]);
    this.button3.text(data.currentQuestion.answerOptions[2]);
    this.button4.text(data.currentQuestion.answerOptions[3]);
    this.questionNumber.text(data.currentNumber + 1);
    this.correctAnswers.text(data.numberCorrect);
  },
  quizDone: function(){
    $('button').hide();
    $('audio').hide();
    $('.quiz-content').hide();
    $('.quiz-complete').removeClass("hidden");
    this.questionNumber.parent().hide();
    this.quizCompleteStatement.text('You correctly answered ' + data.numberCorrect + ' out of ' + data.questionsArray.length + ".");
  }
}
window.game = {
  view: view,
  data: data,
  controler: controller
}

function startGame() {
  $('.quiz-instructions').hide();
  $('.quiz-content').removeClass("hidden");
  $('.result').removeClass("hidden");
}

$(document).ready(function(){
  view.init();
  $('.quiz-start').on("click", startGame );
});
}()
