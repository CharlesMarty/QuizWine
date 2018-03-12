var Answer1 = document.querySelector("#answer1");
var Answer2 = document.querySelector("#answer2");
var Answer3 = document.querySelector("#answer3");
var Result = document.querySelector("#Result");

Answer1.addEventListener("click", wrong);
Answer2.addEventListener("click", wrong);
Answer3.addEventListener("click", right);

function wrong() {
  Result.innerText = "FALSE";
}

function right() {
  Result.innerText = "TRUE";
}
