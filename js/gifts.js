import { gifts } from "./gifts-arr.js";
import { createGifts } from "./utils.js";
import { randomSort } from "./utils.js";

const giftsContainer = document.querySelector("#gifts");
const arrSort = gifts.sort(randomSort);

createGifts(arrSort, giftsContainer);
