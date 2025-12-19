// @ts-nocheck
const ratingButtons = document.querySelectorAll(".number");
const submit = document.querySelector(".submit-btn");
const cardRating = document.querySelector(".card-rating");
const cardThankYou = document.querySelector(".card-thankyou");
const selectRating = document.querySelector(".selected-rating");
let rating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = parseInt(button.textContent);
    rating = value;
    ratingButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

submit.addEventListener("click", () => {
  if (rating > 0) {
    selectRating.textContent = "You selected " + rating + " out of 5";
    cardRating.style.display = "none";
    cardThankYou.style.display = "flex";
  }
});
