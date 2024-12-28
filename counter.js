let count = 0;

const countElement = document.getElementById("count");
const errorMessage = document.getElementById("error-message");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const clearButton = document.getElementById("clear");

function updateCounter() {
  countElement.textContent = count;

  // Show/hide error message and disable decrement button
  if (count === 0) {
    decrementButton.disabled = true;
    errorMessage.classList.remove("hidden");
    clearButton.classList.add("hidden");
  } else {
    decrementButton.disabled = false;
    errorMessage.classList.add("hidden");
  }

  // Show/Hide Clear button based on count
  if (count > 1) {
    clearButton.classList.remove("hidden");
  } else {
    clearButton.classList.add("hidden");
  }
}

// Increment button click
incrementButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

// Decrement button click
decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

// Clear button click
clearButton.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Initialize the UI
updateCounter();
