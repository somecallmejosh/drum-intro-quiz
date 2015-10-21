// Create the global game variables
  var quizItemCount = quizItems.length,
      currentQuestion = 1,
      currentIndex = currentQuestion - 1,
      correctAnswerCount = 0,
      showPercentCorrect = Math.round((correctAnswerCount / quizItemCount) * 100);

  // Utility classes
    function clearQuestions(){
      $('.quiz-options label, .quiz-options input').remove();
    }

    function addselectedClass(){
      var $this = $(this);
      $this.closest(".quiz-options").find('label').removeClass("selected");
      $this.addClass("selected");
      $('.quiz-action .submit').removeClass("disabled");
    }

  
  function updateAudio(sourceUrl){
    // http://stackoverflow.com/questions/9421505/switch-audio-source-with-jquery-and-html5-audio-tag#answer-9512994
    var audio = $('.audio-player');
    $('.audio-source').attr("src", sourceUrl);
    audio[0].pause();
    audio[0].load();
  }

  function displayQuestion(){
    clearQuestions();
    updateAudio(quizItems[currentIndex].mp3Name);
    $.each(quizItems[currentIndex].answerOptions, function(key, value){
      $('<label for=' + (key + 1) + '>' + value + '</label><input type="radio" name="quiz-item" id="' + (key+1) + ' /">').appendTo('.quiz-options');
    });
  }

  function submitResponse(){
    var correct = quizItems[currentIndex].correctAnswer,
        selected = returnUserSelection();
    console.log(correct);
    console.log(selected);
    if( correct === selected){
      console.log("I can't fucking believe it.")
    } else {
      console.log("Oh fucking well. Keep working.")
    }
  }
  
  function returnUserSelection(){
    var selectionID = parseInt($(this).attr("for")) -1;
    console.log(selectionID);
    return selectionID;
  }

  function compareAnswer(quizIndex){
    // extract out the click event
    // Needs work
    var correctAnswer = parseInt(quizItems[quizIndex].correctAnswer);
    var userAnswer = parseInt(returnUserSelection());
    if (correctAnswer == userAnswer) {
      return true;
      console.log("answer is correct");
    } else {
      return false;
      console.log("answer is incorrect");
    }
  }

  displayQuestion();
  $('.quiz-options label').on("click", returnUserSelection);
  $('.quiz-options label').on("click", addselectedClass);
  $('.submit').on("click", submitResponse)




