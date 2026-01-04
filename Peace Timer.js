let twentySecBtn = document.getElementById("twentySecondsBtn");
let thirtySecondBtn = document.getElementById("thirtySecondsBtn");
let fourtySecBtn = document.getElementById("fortySecondsBtn");
let oneMinBtn = document.getElementById("oneMinuteBtn");
let timertextEl = document.getElementById("timerText");
let uniqueId = null;
let decrement = null;
let decreaseTimer = function(seconds) {
    if (uniqueId !== null) {
        clearInterval(uniqueId);
        timertextEl.textContent = "";
    }
    timertextEl.textContent = seconds + " seconds left";
    uniqueId = setInterval(function() {
        decrement = parseInt(timertextEl.textContent) - 1;
        timertextEl.textContent = decrement + " seconds left";
        if (decrement === 0) {
            clearInterval(uniqueId);
            timertextEl.textContent = "Your moment is complete";
        }
    }, 1000);
};

twentySecBtn.onclick = function() {
    let time = (parseInt(twentySecBtn.textContent));
    decreaseTimer(time);
};

thirtySecondBtn.onclick = function() {
    let time = (parseInt(thirtySecondBtn.textContent));
    decreaseTimer(time);
};

fourtySecBtn.onclick = function() {
    let time = (parseInt(fourtySecBtn.textContent));
    decreaseTimer(time);
};
oneMinBtn.onclick = function() {
    let time = (parseInt(oneMinBtn.textContent)) * 60;
    decreaseTimer(time);
};