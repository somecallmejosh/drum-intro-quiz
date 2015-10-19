// Create a Quiz ojbect
  // name of audio file
  // array of possible answers
  // correct answer
  var quizItems = [
    {
      mp3Name: "bh",
      answerOptions: ["Brick House", "Give Up The Funk", "Pick Up The Pieces", "Funky Drummer"],
      correctAnswer: 0
    },
    {
      mp3Name: "fw",
      answerOptions: ["Slip Sliding Away", "What I Am", "Fifty Ways to Leave Your Lover", "Chuck E's In Love"],
      correctAnswer: 2
    },
    {
      mp3Name: "hft",
      answerOptions: ["Rock and Roll", "Hot For Teacher", "I Can't Drive 55", "You Might Think"],
      correctAnswer: 1
    },
    {
      mp3Name: "r",
      answerOptions: ["Layla", "In Your Eyes", "Roseanna", "Maybe I'm Amazed"],
      correctAnswer: 2
    },
    {
      mp3Name: "rr",
      answerOptions: ["Tom Sawyer", "Moby Dick", "The End", "Rock and Roll"],
      correctAnswer: 3
    },
    {
      mp3Name: "rwy",
      answerOptions: ["I Feel Good", "Rock With You", "Billie Jean", "Uptown Funk"],
      correctAnswer: 1
    },
    {
      mp3Name: "s",
      answerOptions: ["Superstision", "Get Down Tonight", "Disco Inferno", "Cissy Strut"],
      correctAnswer: 0
    },
    {
      mp3Name: "sbs",
      answerOptions: ["War", "Sunday Bloody Sunday", "Fortunate Son", "Rainy Day Woman #12 & 35"],
      correctAnswer: 1
    },
    {
      mp3Name: "sss",
      answerOptions: ["In The Mood", "Caravan", "Night in Tunisia", "Sing Sing Sing"],
      correctAnswer: 3
    },
    {
      mp3Name: "tp",
      answerOptions: ["Semi Charmed Life", "Right Here Right Now", "Two Princes", "Inside Out"],
      correctAnswer: 2
    },
    {
      mp3Name: "wo",
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
      correctAnswerCount = 0,
      currentQuestion = 1,
      showPercentCorrect = correctAnswerCount / quizItemCount;

// Create new quiz items based on quiz object
  // Get count of all new quiz items, and keep track of that in quizItemCount variable
  // Create/Clone quiz items into markup
    // Keep track of quiz index

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
