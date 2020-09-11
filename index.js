// injecting
const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flip));

// variables
var isFlipped = false;
var firstCard, secondCard;

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

const checkIt = () => {
  firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
};

const success = () => {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

const fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
};

const reset = () => {
  [isFlipped, firstCard, secondCard] = [false, null, null];
};

const shuffel = () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
};

window.onload = () => shuffel();
