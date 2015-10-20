// Create the game variables
  // quizItemCount
  // correctAnswerCount
  // currentQuesion
  // showPercentCorrect = isCorrectAnswer / quizItemCount
  var quizItemCount = quizItems.length,
      correctAnswerCount = 0,
      currentQuestion = 1,
      currentIndex = currentQuestion - 1,
      showPercentCorrect = Math.round((correctAnswerCount / quizItemCount) * 100);

// Create new quiz items based on quiz object
  // Get count of all new quiz items, and keep track of that in quizItemCount variable
  // Create/Clone quiz items into markup
    // Keep track of quiz index

  function updateAudio(sourceUrl){
    // http://stackoverflow.com/questions/9421505/switch-audio-source-with-jquery-and-html5-audio-tag#answer-9512994
    var audio = $('.audio-player');
    $('.audio-source').attr("src", sourceUrl);
    audio[0].pause();
    audio[0].load();
  }

  function updateQuestion(questionOptions){
    $('.quiz-options div').remove();
    $.each(quizItems[questionOptions].answerOptions, function(key, value){
      $('<div id=' + (key + 1) + '>' + value + '<div>').appendTo('.quiz-options');
    });
  }


  function compareAnswer(comparison){
    // compare user selected answer to correct answer
    // Get user selection
      // Compare user selection to correct answer
        // if answer is correct && quizIndex <= quizItemCount, 
          // Add +1 to a variable called correctAnswerCount
          // Move user to next question of quiz (increment currentQuestion)
          // Add "is-correct" class to question
        // else if answer !correct
          // do some stuff
          // Move user to next question of quiz (increment currentQuestion)
  }

  if(currentQuestion <= quizItemCount) {
    updateAudio(quizItems[currentIndex].mp3Name);
    updateQuestion(currentIndex);
  } else if (currentQuestion > quizItemCount){
    $('.quiz-content, .quiz-instructions').hide();
    $('.quiz-complete').removeClass("hidden");
  }

  $('.question-index').text(currentQuestion);
  $('.correct-total').text(correctAnswerCount);
  $('.question-total').text(quizItemCount);
  $('.percent-correct').text(showPercentCorrect);

 

