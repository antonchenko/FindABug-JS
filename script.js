
const fieldCards = document.getElementById("game");
const startButton = document.getElementById("button");
const easyButton = document.getElementById("easy");
const middleButton = document.getElementById("middle");
const hardButton = document.getElementById("hard");
const buttonClickLevel = document.getElementById("choose-level");

const container = document.querySelector(".container");
const inputs = document.querySelectorAll("input");

let renderedCards = [];
let level = 1;
let bugCard = 0;

class Card {
  renderCard(isBug) {
    const card = document.createElement("div");
    card.classList.add("card");
    if (isBug) {
      card.innerHTML = `
      <img class="card__front" src="./img/cardBack.png">
      `;
      card.addEventListener (
        "click",
        (e) => e.target.src = "./img/cardBug.png" 
      );
    } else {
      card.innerHTML = `
        <img class="card__front" src="./img/cardBack.png">
      `;
      card.addEventListener (
        "click",
        (e) => e.target.src = "./img/gameOver.png"
        ); 
      }
    fieldCards.append(card);
  }

  generateCards(cards, lvl) {
    bugCard = Math.floor(Math.random() * cards);
    for (let i = 0; i < cards; i++) {
      if (i === bugCard) {
        this.renderCard(true);
      } else {
        this.renderCard(false);
      }
    }
    fieldCards.className = `game ${lvl}`;
  }

  renderCards(level) {
    switch (level) {
      case 1 :
        this.generateCards(3, "easy-game");
        break;

      case 2 :
        this.generateCards(6, "middle-game");
        break;

      case 3 :
        this.generateCards(10, "hard-game");
        break;
    }
  }
}

const cards = new Card();

const goMenu = function () {
  fieldCards.innerHTML = "";
  fieldCards.className = "";
  document.body.classList.remove("field");
  container.classList.remove("hidden");
}

const selectedLevel = (selectedLevel) =>  {
  if (selectedLevel === 1) {
    easyButton.classList.add("selected");
    middleButton.classList.remove("selected");
    hardButton.classList.remove("selected");
  } else if (selectedLevel === 2) {
    middleButton.classList.add("selected");
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
  } else {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    middleButton.classList.remove("selected");
  }
 level = selectedLevel;
}

easyButton.addEventListener("click", () => selectedLevel(1));
middleButton.addEventListener("click", () => selectedLevel(2));
hardButton.addEventListener("click", () => selectedLevel(3));

button.addEventListener("click", () => {
  fieldCards.removeEventListener("click", goMenu);
  container.classList.add("hidden");
  document.body.classList.add("field");
  cards.renderCards(level);
  renderedCards = document.querySelectorAll(".card");
  for (let i = 0; i < renderedCards.length; i++) {
    renderedCards[i].addEventListener("click", function() {
    renderedCards[i].classList.add("rotate");
    renderedCards[i].classList.remove("card");
      setTimeout(function() {
        fieldCards.addEventListener("click", goMenu, {once: true});
      }, 300);
    });
  }
});