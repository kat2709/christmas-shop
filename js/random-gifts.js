import { gifts } from "./gifts-arr.js";
import { createGifts } from "./utils.js";

const bestGiftsBox = document.querySelector(".best-gifts-box");

randomGifts(gifts);

function randomGifts(arr) {
  let randomArr = [];
  const randomArrlength = 4;
  while (randomArr.length < randomArrlength) {
    let randomNum = Math.floor(Math.random() * arr.length);
    if (!randomArr.includes(arr[randomNum])) {
      randomArr.push(arr[randomNum]);
    }
  }
  createGifts(randomArr, bestGiftsBox);
}
