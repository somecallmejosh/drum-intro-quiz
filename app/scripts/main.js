// Create the global game variables
  var quizItemCount = quizItems.length,
      currentQuestion = 1,
      currentIndex = currentQuestion - 1,
      correctAnswerCount = 0,
      showPercentCorrect = Math.round((correctAnswerCount / quizItemCount) * 100);

  $('.question-index').html(currentQuestion);
  $('.percent-correct').html(showPercentCorrect);
  $('.correct-total').html(correctAnswerCount);
  $('.question-total').html(quizItemCount);
  
  // Utility functions
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
    if(currentQuestion <= quizItemCount){
      clearQuestions();
      updateAudio(quizItems[currentIndex].mp3Name);
      $.each(quizItems[currentIndex].answerOptions, function(key, value){
        $('<label for=' + (key + 1) + '>' + value + '</label><input type="radio" name="quiz-item" id="' + (key+1) + ' /">').appendTo('.quiz-options');
      });
      // A bunch of DOM Crud
      $('.quiz-options label').on("click", userSelection);
      $('.quiz-options label').on("click", addselectedClass);
      $('.submit').on("click", submitResponse);
      $('.submit').on("click", function(){
        $(this).addClass("disabled");
        $('.quiz-options').addClass('option-selected');
        $('.next-question').removeClass("disabled");
      })
    } else {
      $('.quiz-instructions, .quiz-content').hide();
      $('.quiz-complete').removeClass("hidden");
    }
  }

  function userSelection(){
    selectionID = parseInt($(this).attr("for")-1);
    return selectionID;
  }

  function submitResponse(){
    var correctResult = quizItems[currentIndex].correctAnswer;
    var userResponse = selectionID;
    var $question = $('.quiz-question');
    if (correctResult === userResponse){
      $question.removeClass("answer-incorrect");
      $question.addClass("answer-correct");
      // needs to return Correct Answer Count
      console.log("Correct Answer Count: " + correctAnswerCount);
    } else {
      $question.removeClass("answer-correct");
      $question.addClass("answer-incorrect");
    }
  }

  function resetGame(){
    // reset all game variables
  }

displayQuestion();


