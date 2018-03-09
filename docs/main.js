var answerDiv1 = document.querySelector("#answer1");
var answerDiv2 = document.querySelector("#answer2");
var resultDiv = document.querySelector("#result");

answerDiv1.addEventListener("click", rightAnswer);
answerDiv2.addEventListener("click", wrongAnswer);

function wrongAnswer() {
  resultDiv.innerText = "Wrong answer";
}

function rightAnswer() {
  resultDiv.innerText = "Right answer";
}
