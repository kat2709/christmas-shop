import { gifts } from "./gifts-arr.js";
import { createGifts } from "./utils.js";

const tabs = document.querySelector(".gifts-tabs");
const giftsBox = document.querySelector("#gifts");

tabs.addEventListener("click", (e) => {
  if (e.target.innerHTML === "all") {
    giftsBox.innerHTML = "";
    createGifts(gifts, giftsBox);
    clearActiveStyle();
    e.target.classList.add("active-tab");
    return;
  }
  const filterGifts = gifts.filter(
    (i) => i.category.toLowerCase() === e.target.innerHTML
  );
  if (!filterGifts.length) {
    return;
  }
  clearActiveStyle();
  e.target.classList.add("active-tab");
  giftsBox.innerHTML = "";
  createGifts(filterGifts, giftsBox);
});

function clearActiveStyle() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
}
