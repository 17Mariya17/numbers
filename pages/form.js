document.addEventListener("DOMContentLoaded", input);
document.addEventListener("DOMContentLoaded", secondTask);

//First task
function input() {
  document
    .getElementById("formInputData")
    .addEventListener("submit", function (e) {
      //Prevent default page upload
      e.preventDefault();
      //Create array of input words
      const inputWords = [
        document.getElementById("firstWord").value,
        document.getElementById("secondWord").value,
        document.getElementById("thirdWord").value,
      ];
      //Check null word
      for (let i = 0; i <= inputWords.length; i++) {
        if (inputWords[i] === "") {
          console.log(
            "Error. Please try again. You did not enter the word number ",
            i + 1
          );
          return;
        }
      }
      //Change words' order
      let inputWordsOrder = inputWords.sort(function () {
        return Math.random() - 0.5;
      });
      //Create paragraph with new words' order
      const newOrder = document.createElement("p");
      newOrder.innerHTML = inputWordsOrder;
      document.getElementById("outDataText").innerHTML = "";
      document.getElementById("outDataText").appendChild(newOrder);
    });
}

//Second task
function secondTask() {
  document
    .getElementById("formNumber")
    .addEventListener("submit", function (e) {
      //Prevent default page upload
      e.preventDefault();
      //Split number
      const splitNum = document
        .getElementById("yourNumber")
        .value.toString()
        .split("")
        .join("  ");
      //Create paragraph with splited number
      const numberOrder = document.createElement("p");
      numberOrder.innerHTML = splitNum;
      document.getElementById("outNumberText").innerHTML = "";
      document.getElementById("outNumberText").appendChild(numberOrder);
    });
}
