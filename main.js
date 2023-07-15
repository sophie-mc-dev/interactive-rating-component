const submitBtn = document.getElementById("btn-submit");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const rating = document.getElementById("rating");
const allRatings = document.querySelector(".rating-score").querySelectorAll("button");

allRatings.forEach((r) => {
  r.addEventListener("click", () => {
    rating.innerHTML = r.innerHTML;
    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener("click", () => {
  thankYouCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
});

submitBtn.disabled = true;
