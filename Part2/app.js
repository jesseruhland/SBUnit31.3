const baseURL = "https://deckofcardsapi.com/api/deck";

const $newDeckBtn = $("#new-deck-button");
const $drawBtn = $("#draw-card-button");
const $cardBox = $("#card-box");
const deck = {
  id: "",
  remainingCards: 0,
};

$newDeckBtn.on("click", async function () {
  const resp = await axios.get(baseURL + "/new/shuffle");
  deck.id = resp.data.deck_id;
  deck.remainingCards = resp.data.remaining;
  $newDeckBtn.hide();
  $drawBtn.show();
  $cardBox.html("");
});

$drawBtn.on("click", async function () {
  const resp = await axios.get(baseURL + `/${deck.id}/draw/?count=1`);
  addCardToStack(resp);
  if (deck.remainingCards === 0) {
    $newDeckBtn.show();
    $drawBtn.hide();
  }
});

function addCardToStack(resp) {
  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", resp.data.cards[0].image);
  cardImg.style.transform = `rotate(${Math.random() * 360}deg`;
  $cardBox.append(cardImg);
  deck.remainingCards = resp.data.remaining;
}
