const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");

// Function to check and display the birthday message
function updateCountdown() {
  const currentDate = new Date();
  const targetDate = new Date("December 25, 2023 00:00:00");
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  if (timeDifference > 0) {
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    question.innerHTML = `Come back on your birthday!<br>Time Remaining: ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, ${secondsRemaining} seconds`;
  } else {
    question.innerHTML = "Happy Birthday!";
    clearInterval(timer); // Stop the countdown once it reaches the target date
  }
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 24th!";
  gif.src = "images/2ndgif.gif";

  // Hide the buttons after clicking "Yes"
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  //after yes show new button
  newBtn.style.display = "block";

  // Copy the styles from "Yes" button to the new button
  const computedStyle = window.getComputedStyle(yesBtn);
  newBtn.style.backgroundColor = computedStyle.backgroundColor;
  newBtn.style.color = computedStyle.color;
  newBtn.style.border = computedStyle.border;
  // Add any other necessary styles to match the "Yes" button

  newBtn.style.width = "200px";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Event listener for the new button click
newBtn.addEventListener("click", () => {
  updateCountdown(); // Initial call when the new button is clicked
  const timer = setInterval(updateCountdown, 1000); // Update the countdown every second
  gif.style.display = "none"; // Hide the second GIF after the new button is clicked
  newBtn.style.display = "none";
});
