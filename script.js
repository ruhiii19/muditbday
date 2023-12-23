const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");

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

    question.innerHTML = `Time Remaining: ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, ${secondsRemaining} seconds`;
  } else {
    question.innerHTML =
      '<a href="hbd.html">Click to view the best 1 year 8 months of my life</a>';
    clearInterval(timer);
  }
}

newBtn.addEventListener("click", () => {
  newBtn.style.display = "none";
  gif.style.display = "none";
  clearInterval(timer); // Clear any existing interval
  updateCountdown();
  timer = setInterval(updateCountdown, 1000); // Assign the interval to the global timer variable
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 24th!";
  gif.src = "images/2ndgif.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  newBtn.style.display = "block";

  const computedStyle = window.getComputedStyle(yesBtn);
  newBtn.style.backgroundColor = computedStyle.backgroundColor;
  newBtn.style.color = computedStyle.color;
  newBtn.style.border = computedStyle.border;
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

newBtn.addEventListener("click", () => {
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
  gif.style.display = "none";
  newBtn.style.display = "none";
});
