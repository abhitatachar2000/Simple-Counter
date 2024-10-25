const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");

let count = 0;


decreaseButton.onclick = () => {
    count--;
    countLabel.textContent = count;
}

increaseButton.onclick = () => {
    count++;
    countLabel.textContent = count;
}

resetButton.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}