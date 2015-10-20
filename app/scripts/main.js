// Create a Quiz ojbect
  // name of audio file
  // array of possible answers
  // correct answer
  var quizItems = [
    {
      mp3Name: "audio/bh.mp3",
      answerOptions: ["Brick House", "Give Up The Funk", "Pick Up The Pieces", "Funky Drummer"],
      correctAnswer: 0
    },
    {
      mp3Name: "audio/fw.mp3",
      answerOptions: ["Slip Sliding Away", "What I Am", "Fifty Ways to Leave Your Lover", "Chuck E's In Love"],
      correctAnswer: 2
    },
    {
      mp3Name: "audio/hft.mp3",
      answerOptions: ["Rock and Roll", "Hot For Teacher", "I Can't Drive 55", "You Might Think"],
      correctAnswer: 1
    },
    {
      mp3Name: "audio/r.mp3",
      answerOptions: ["Layla", "In Your Eyes", "Roseanna", "Maybe I'm Amazed"],
      correctAnswer: 2
    },
    {
      mp3Name: "audio/rr.mp3",
      answerOptions: ["Tom Sawyer", "Moby Dick", "The End", "Rock and Roll"],
      correctAnswer: 3
    },
    {
      mp3Name: "audio/rwy.mp3",
      answerOptions: ["I Feel Good", "Rock With You", "Billie Jean", "Uptown Funk"],
      correctAnswer: 1
    },
    {
      mp3Name: "audio/s.mp3",
      answerOptions: ["Superstision", "Get Down Tonight", "Disco Inferno", "Cissy Strut"],
      correctAnswer: 0
    },
    {
      mp3Name: "audio/sbs.mp3",
      answerOptions: ["War", "Sunday Bloody Sunday", "Fortunate Son", "Rainy Day Woman #12 & 35"],
      correctAnswer: 1
    },
    {
      mp3Name: "audio/sss.mp3",
      answerOptions: ["In The Mood", "Caravan", "Night in Tunisia", "Sing Sing Sing"],
      correctAnswer: 3
    },
    {
      mp3Name: "audio/tp.mp3",
      answerOptions: ["Semi Charmed Life", "Right Here Right Now", "Two Princes", "Inside Out"],
      correctAnswer: 2
    },
    {
      mp3Name: "audio/wo.mp3",
      answerOptions: ["I Want Candy", "Hand Jive", "Wipeout", "Let There Be Drums"],
      correctAnswer: 2
    }
  ]

// Create the game variables
  // quizItemCount
  // correctAnswerCount
  // currentQuesion
  // showPercentCorrect = isCorrectAnswer / quizItemCount
  var quizItemCount = quizItems.length,
      correctAnswerCount = 4,
      currentQuestion = 1,
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

  if(currentQuestion == 1) {
    updateAudio(quizItems[currentQuestion - 1].mp3Name)
  }

// Get user selection
  // Compare user selection to correct answer
    // if answer is correct && quizIndex <= quizItemCount, 
      // Add +1 to a variable called correctAnswerCount
      // Move user to next question of quiz (increment currentQuestion)
      // Add "is-correct" class to question
    // else if answer !correct
      // do some stuff
      // Move user to next question of quiz (increment currentQuestion)
    // else
      // toggle "visible" class on the "thank you for playing view"

  $('.question-index').text(currentQuestion);
  $('.question-total').text(quizItemCount);
  $('.percent-correct').text(showPercentCorrect);
