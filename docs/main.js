window.onload = () => {

  /*
    DIVS
  */

  // Start button
  var $startButton = document.querySelector("#startButton");

  // App
  var $app = document.querySelector("#app");

  // App children
  var $question = document.querySelector("#question");
  var $explanation = document.querySelector("#explanation");
  
  // Question children
  var $description = document.querySelector("#description");
  var $answer0 = document.querySelector("#answer0");
  var $answer1 = document.querySelector("#answer1");
  var $answer2 = document.querySelector("#answer2");
  var $answer3 = document.querySelector("#answer3");

  // Explanation children


  /*
    LOGIC
  */

  // Variables
  var quizzContent = {};
  var currentQuestionIndex = 0;
  var score = 0;

  // Fetch database data
  var parseTextToJson = blob => blob.json();
  var assignJsonToQuizz = json => quizzContent = json.quizz;

  window.fetch("./quizz.json")
    .then(parseTextToJson)
    .then(assignJsonToQuizz);

  var getCurrentQuestion = () => {
    return quizzContent[currentQuestionIndex];
  }

  // Main function
  var launchQuestion = () => {
    var question  = getCurrentQuestion();
    $description.innerText = question.description;
    $answer0.innerText = question.answer0;
    $answer1.innerText = question.answer1;
    $answer2.innerText = question.answer2;
    $answer3.innerText = question.answer3;

    $question.classList.add('shown');
    $app.classList.add('shown');
  }

  $startButton.addEventListener("click", launchQuestion);

  var stopQuizz = () => {
    console.log('youre done! score: ', score);
    // close app div and say score
  };

  var answerQuestion = (index) => {
    var question  = quizzContent[currentQuestionIndex];
    if (question.correctAnswer === index) {
      console.log("ok")
      score = score + 2;
    } else {
      console.log("not ok")
      score = score - 1;
    }

    if (currentQuestionIndex === quizzContent.length - 1) {
      stopQuizz()
    } else {
      currentQuestionIndex = currentQuestionIndex + 1;
      launchQuestion();
    }
        
  }

  $answer0.addEventListener("click", () => answerQuestion(0));
  $answer1.addEventListener("click", () => answerQuestion(1));
  $answer2.addEventListener("click", () => answerQuestion(2));
  $answer3.addEventListener("click", () => answerQuestion(3));

};

