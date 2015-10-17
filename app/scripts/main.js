// Create the game variables
  // quizItemCount
  // correctAnswerCount
  // showPercentCorrect = isCorrectAnswer / quizItemCount

// Create a Quiz ojbect
  // name of audio file
  // array of possible answers
  // correct answer

// Create new quiz items based on quiz object
  // Get count of all new quiz items, and keep track of that in quizItemCount variable
  // Create/Clone quiz items into markup
    // Keep track of quiz index

// Get user selection
  // Compare user selection to correct answer
    // if answer is correct && quizIndex <= quizItemCount, 
      // Add +1 to a variable called correctAnswerCount
      // Move user to next question of quiz
      // Add "is-correct" class to question
    // else
      // toggle "visible" class on the "thank you for playing view"
