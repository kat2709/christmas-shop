import { gifts } from "./gifts-arr.js";
import { cardCategoryStyle } from "./utils.js";

export function openDialog(e) {
  let el = e.target.parentNode;
  if (!el.hasAttribute("id")) {
    el = el.parentNode;
  }
  let elemId = el.id;
  const giftObj = gifts.find((element) => element.id === elemId);
  showDialog(giftObj);
}

function showDialog(obj) {
  const body = document.querySelector("body");
  const html = document.getElementsByTagName("html")[0];
  html.classList.add("modal-open");
  body.classList.add("modal-open");
  const dialog = document.createElement("dialog");
  dialog.classList.add("gift-modal");
  document.body.appendChild(dialog);

  const cross = document.createElement("img");
  cross.classList.add("cross");
  cross.src = `./assets/icons/cross.svg`;
  dialog.appendChild(cross);

  const giftImg = document.createElement("img");
  giftImg.classList.add("dialog-img");
  giftImg.src = obj.image;
  dialog.appendChild(giftImg);

  const giftBox = document.createElement("div");
  giftBox.classList.add("dialog-gift-box");
  dialog.appendChild(giftBox);

  const giftCategory = document.createElement("h4");
  giftCategory.classList.add(`${cardCategoryStyle[obj.category]}`);
  giftCategory.innerHTML = `${obj.category}`;
  giftBox.appendChild(giftCategory);

  const giftTitle = document.createElement("h3");
  giftTitle.innerHTML = `${obj.name}`;
  giftBox.appendChild(giftTitle);

  const giftDescription = document.createElement("p");
  giftDescription.classList.add("text");
  giftDescription.innerHTML = `${obj.description}`;
  giftBox.appendChild(giftDescription);

  const powersBoxTitle = document.createElement("h4");
  powersBoxTitle.classList.add("powers-box-title");
  powersBoxTitle.innerHTML = "Adds superpowers to:";
  giftBox.appendChild(powersBoxTitle);

  createSuperPowers(obj.superpowers);

  dialog.showModal();

  cross.addEventListener("click", () => {
    dialog.close();
    document.body.removeChild(dialog);
    html.classList.remove("modal-open");
    body.classList.remove("modal-open");
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
      document.body.removeChild(dialog);
      html.classList.remove("modal-open");
      body.classList.remove("modal-open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

function createSuperPowers(obj) {
  const giftBox = document.querySelector(".dialog-gift-box");

  const superPowersBox = document.createElement("div");
  giftBox.appendChild(superPowersBox);

  for (let key in obj) {
    const powerBox = document.createElement("div");
    powerBox.classList.add("power-box");
    superPowersBox.appendChild(powerBox);

    const powerTitle = document.createElement("p");
    powerTitle.classList.add("text");
    powerTitle.classList.add("power-title");
    powerTitle.innerHTML = key;
    powerBox.appendChild(powerTitle);

    const powerValue = document.createElement("p");
    powerValue.classList.add("text");
    powerValue.innerHTML = obj[key];
    powerBox.appendChild(powerValue);

    const raitingBox = document.createElement("div");
    raitingBox.classList.add("raiting-box");
    powerBox.appendChild(raitingBox);

    let raiting = Number(obj[key]) / 100;
    const raitingLength = 5;

    for (let i = 0; i < raitingLength; i++) {
      if (raiting > 0) {
        const raitingItem = document.createElement("svg");
        raitingItem.innerHTML = `<svg width="13.78" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2942 14.8224L16.4727 14.3481L18.674 13.7583L18.3102 12.4006L14.7512 13.3542L13.0725 12.385C13.0957 12.26 13.1084 12.1315 13.1084 12C13.1084 11.8684 13.0957 11.7398 13.0725 11.6149L14.7512 10.6457L18.3102 11.5994L18.674 10.2416L16.4727 9.65177L17.2942 9.17747L20.8194 8.96588L21.3385 6.03095L18.5373 5.01305L16.5914 7.96016L15.7699 8.43446L16.3598 6.23317L15.002 5.86939L14.0484 9.42842L12.3687 10.3982C12.1741 10.2315 11.949 10.0997 11.7028 10.0124V8.0742L14.3082 5.46879L13.3143 4.47488L11.7028 6.08633V5.13772L13.2772 1.98876L11 0L8.72271 1.98886L10.2972 5.13782V6.08642L8.68569 4.47497L7.69178 5.46889L10.2971 8.0743V10.0125C10.051 10.0998 9.82588 10.2316 9.6312 10.3983L7.95154 9.42852L6.99792 5.86949L5.64018 6.23326L6.23003 8.43456L5.40854 7.96025L3.46269 5.01314L0.661484 6.03104L1.18058 8.96597L4.70578 9.17757L5.52727 9.65187L3.32597 10.2417L3.6898 11.5994L7.24882 10.6458L8.92746 11.615C8.90431 11.74 8.89157 11.8685 8.89157 12C8.89157 12.1316 8.90427 12.2602 8.92746 12.3851L7.24882 13.3543L3.6898 12.4006L3.32597 13.7584L5.52727 14.3482L4.70578 14.8225L1.18058 15.034L0.661484 17.969L3.46274 18.9869L5.40859 16.0397L6.23012 15.5654L5.64028 17.7667L6.99801 18.1306L7.95163 14.5715L9.6313 13.6018C9.82598 13.7684 10.0511 13.9003 10.2972 13.9875V15.9258L7.69187 18.5311L8.68579 19.525L10.2973 17.9135V18.8621L8.7228 22.0111L11.0001 24L13.2774 22.0111L11.7029 18.8621V17.9135L13.3144 19.525L14.3083 18.5311L11.7029 15.9258V13.9875C11.9491 13.9003 12.1742 13.7684 12.3689 13.6018L14.0485 14.5715L15.0022 18.1306L16.3599 17.7667L15.7701 15.5654L16.5916 16.0397L18.5374 18.9869L21.3387 17.969L20.8196 15.034L17.2942 14.8224Z" fill="#FF4646"/>
</svg>`;
        raitingBox.appendChild(raitingItem);
        raiting--;
        continue;
      }
      const raitingItem = document.createElement("svg");
      raitingItem.innerHTML = `<svg width="13.78" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2942 14.8224L16.4727 14.3481L18.674 13.7583L18.3102 12.4006L14.7512 13.3542L13.0725 12.385C13.0957 12.26 13.1084 12.1315 13.1084 12C13.1084 11.8684 13.0957 11.7398 13.0725 11.6149L14.7512 10.6457L18.3102 11.5994L18.674 10.2416L16.4727 9.65177L17.2942 9.17747L20.8194 8.96588L21.3385 6.03095L18.5373 5.01305L16.5914 7.96016L15.7699 8.43446L16.3598 6.23317L15.002 5.86939L14.0484 9.42842L12.3687 10.3982C12.1741 10.2315 11.949 10.0997 11.7028 10.0124V8.0742L14.3082 5.46879L13.3143 4.47488L11.7028 6.08633V5.13772L13.2772 1.98876L11 0L8.72271 1.98886L10.2972 5.13782V6.08642L8.68569 4.47497L7.69178 5.46889L10.2971 8.0743V10.0125C10.051 10.0998 9.82588 10.2316 9.6312 10.3983L7.95154 9.42852L6.99792 5.86949L5.64018 6.23326L6.23003 8.43456L5.40854 7.96025L3.46269 5.01314L0.661484 6.03104L1.18058 8.96597L4.70578 9.17757L5.52727 9.65187L3.32597 10.2417L3.6898 11.5994L7.24882 10.6458L8.92746 11.615C8.90431 11.74 8.89157 11.8685 8.89157 12C8.89157 12.1316 8.90427 12.2602 8.92746 12.3851L7.24882 13.3543L3.6898 12.4006L3.32597 13.7584L5.52727 14.3482L4.70578 14.8225L1.18058 15.034L0.661484 17.969L3.46274 18.9869L5.40859 16.0397L6.23012 15.5654L5.64028 17.7667L6.99801 18.1306L7.95163 14.5715L9.6313 13.6018C9.82598 13.7684 10.0511 13.9003 10.2972 13.9875V15.9258L7.69187 18.5311L8.68579 19.525L10.2973 17.9135V18.8621L8.7228 22.0111L11.0001 24L13.2774 22.0111L11.7029 18.8621V17.9135L13.3144 19.525L14.3083 18.5311L11.7029 15.9258V13.9875C11.9491 13.9003 12.1742 13.7684 12.3689 13.6018L14.0485 14.5715L15.0022 18.1306L16.3599 17.7667L15.7701 15.5654L16.5916 16.0397L18.5374 18.9869L21.3387 17.969L20.8196 15.034L17.2942 14.8224Z" fill="#ff46461a"/>
</svg>`;
      raitingBox.appendChild(raitingItem);
    }
  }
}
