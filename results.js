var storedScores = JSON.parse(localStorage.getItem("scores"));
var highScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");

function displayScores() {
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var innerText = storedScores[i];
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = innerText;
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
    }
};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

// clearBtn.addEventListener("click", function () {
//     highScoresArea.innerHTML = "";
//     window.localStorage.clear();

// });