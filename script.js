// script.js

const quotes = [
  "Typing is the key to productivity.",
  "Practice makes perfect.",
  "JavaScript is fun to learn.",
  "Speed typing improves efficiency.",
  "Web development starts with HTML and CSS."
];

let startTime, endTime;
let quote = "";

function startTest() {
  // Pick random quote
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;

  document.getElementById("input").disabled = false;
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("input").focus();

  startTime = new Date();
}

function resetTest() {
  document.getElementById("input").value = "";
  document.getElementById("input").disabled = true;
  document.getElementById("quote").innerText = "Click start to begin...";
  document.getElementById("result").innerText = "";
}

document.getElementById("input").addEventListener("input", function () {
  let typedText = this.value;

  if (typedText === quote) {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordCount = quote.split(" ").length;
    const speed = Math.round((wordCount / timeTaken) * 60); // WPM

    // Accuracy
    let correctChars = 0;
    for (let i = 0; i < quote.length; i++) {
      if (typedText[i] === quote[i]) {
        correctChars++;
      }
    }
    const accuracy = Math.round((correctChars / quote.length) * 100);

    document.getElementById("result").innerHTML = `
      ⏱️ Time: ${timeTaken.toFixed(2)} seconds <br>
      ✍️ Speed: ${speed} WPM <br>
      ✅ Accuracy: ${accuracy}%`;
    document.getElementById("input").disabled = true;
  }
});
