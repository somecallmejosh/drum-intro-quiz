// Create the global game variables  
  var quizItemCount;
  var currentQuestion;
  var currentIndex;
  var correctAnswerCount;
  var showPercentCorrect;

  // Utility functions
  function resetQuestion(){
    $('.quiz-options label').remove();
    $('.quiz-question').removeClass("answer-incorrect answer-correct");
    $('.quiz-options').removeClass("option-selected");
    $('.next-question, .submit').addClass("disabled");
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

  $('.quiz-content').hide();
  $('.quiz-start').on("click", quizStart);
  
  function quizStart(){
    quizItemCount = quizItems.length;
    currentQuestion = 10;
    currentIndex = currentQuestion - 1;
    correctAnswerCount = 0;
    showPercentCorrect = Math.round((correctAnswerCount / quizItemCount) * 100);   
    showSingleQuestion();
    captureSelction();
    showStatus();
    $('.quiz-content').fadeIn(1000);
    $('.quiz-instructions').fadeOut(300);
    $('.submit').on("click", submitResponse);
    $('.submit').on("click", function(){
      $(this).addClass("disabled");
      $('.quiz-options').addClass('option-selected');
      $('.next-question').removeClass("disabled");
    }); 
  }

  $('.next-question').on("click", showNextQuestion);

  function showNextQuestion(){
    resetQuestion();
    currentIndex++;
    currentQuestion++;
    showSingleQuestion();
    captureSelction();
    showStatus();
  }

  var showSingleQuestion = (function(){
    resetQuestion();
    return function(){
      var currentItem = quizItems[currentIndex];
      var answerOptions = currentItem.answerOptions;
      updateAudio(quizItems[currentIndex].mp3Name);
      for(var i = 0; i < answerOptions.length; i++){
        $('<label for=' + (i + 1) + '>' + answerOptions[i] + '</label>').appendTo('.quiz-options');
      }
    }
  })();


  function userSelection(){
    selectionID = parseInt($(this).attr("for")-1);
    console.log("user selection: " + selectionID);
    return selectionID;
  }

  function captureSelction(){
    $('.quiz-options label').on("click", userSelection);
    $('.quiz-options label').on("click", addselectedClass);
  }

  function submitResponse(){
    var correctResult = quizItems[currentIndex].correctAnswer;
    var userResponse = selectionID;
    var $question = $('.quiz-question');
    if (correctResult === userResponse){
      $question.addClass("answer-correct");
    } else {
      $question.addClass("answer-incorrect");
    }
  }

  function resetGame(){
    window.location.reload(); 
  }

  function showStatus(){
    $('.question-index').html(currentQuestion);
    $('.percent-correct').html(showPercentCorrect);
    $('.correct-total').html(correctAnswerCount);
    $('.question-total').html(quizItemCount);
  }
  