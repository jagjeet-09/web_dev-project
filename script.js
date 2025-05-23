window.onload = () => {
  const textElements = document.querySelectorAll(".text");
  const targetDiv = document.querySelector("#target-div"); // Change this to the correct selector for your target div
  const rocket = document.getElementById('rocket');

  textElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      targetDiv.classList.remove("not-loaded");
      targetDiv.classList.add("loaded");
    });
  });
};

// Set your start date here (year, month (0-11), day)
const startDate = new Date(2021, 8, 10); // January 1, 2024

function updateDayCount() {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const textElement = document.querySelector('.text span');
    if (textElement) {
        textElement.innerHTML = `Happy ${diffDays}<sup>th</sup> Day of getting annoyed by me :3`;
    }
}

// Update the count when the page loads
document.addEventListener('DOMContentLoaded', updateDayCount);

// Update the count every day at midnight
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        updateDayCount();
    }
}, 60000); // Check every minute
