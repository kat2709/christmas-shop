import { openDialog } from "./gift-dialog.js";

export const cardCategoryStyle = {
  "For Work": "tag-pirple",
  "For Health": "tag-green",
  "For Harmony": "tag-pink",
};

export function createGifts(arr, container) {
  for (let i = 0; i < arr.length; i++) {
    const giftCard = document.createElement("div");
    giftCard.classList.add("best-gifts-card");
    giftCard.setAttribute("id", arr[i].id);
    container.appendChild(giftCard);

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

    giftCard.addEventListener("click", openDialog);
  }
}

export function randomSort() {
  return 0.5 - Math.random();
}
