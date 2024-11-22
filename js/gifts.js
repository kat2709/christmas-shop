import { gifts } from "./shortGiftsArr.js";

const giftsContainer = document.getElementById("gifts");
const cardCategoryStyle = {
  "For Work": "tag-pirple",
  "For Health": "tag-green",
  "For Harmony": "tag-pink",
};

function createGifts(arr) {
  for (let i = 0; i < arr.length; i++) {
    const giftCard = document.createElement("div");
    giftCard.classList.add("best-gifts-card");
    giftsContainer.appendChild(giftCard);

    const giftImg = document.createElement("img");
    giftImg.src = arr[i].image;
    giftCard.appendChild(giftImg);

    const giftTitleBox = document.createElement("div");
    giftTitleBox.classList.add("card-title-box");
    giftCard.appendChild(giftTitleBox);

    const giftCategory = document.createElement("h4");
    giftCategory.classList.add(`${cardCategoryStyle[arr[i].category]}`);
    giftCategory.innerHTML = `${arr[i].category}`;
    giftTitleBox.appendChild(giftCategory);

    const giftTitle = document.createElement("h3");
    giftTitle.innerHTML = `${arr[i].name}`;
    giftTitleBox.appendChild(giftTitle);
  }
}

createGifts(gifts);
