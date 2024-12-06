const ctaDay = document.querySelector("#cta-days");
const ctaHours = document.querySelector("#cta-hours");
const ctaMinutes = document.querySelector("#cta-minutes");
const ctaSeconds = document.querySelector("#cta-seconds");
const futureDate = new Date(Date.UTC(2025, 0, 1, 0, 0, 0));

function remaindingTime() {
  const today = new Date().getTime();
  const diffTime = futureDate.getTime() - today;

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  let diffDays = diffTime / day;
  diffDays = Math.floor(diffDays);
  let diffHours = Math.floor((diffTime % day) / hour);
  let diffMinutes = Math.floor((diffTime % hour) / minute);
  let diffSeconds = Math.floor((diffTime % minute) / 1000);

  if (diffTime <= 0) {
    clearInterval(countdown);
    ctaDay.innerHTML = "00";
    ctaHours.innerHTML = "00";
    ctaMinutes.innerHTML = "00";
    ctaSeconds.innerHTML = "00";
  }

  ctaDay.innerHTML = diffDays;
  ctaHours.innerHTML = diffHours;
  ctaMinutes.innerHTML = diffMinutes;
  ctaSeconds.innerHTML = diffSeconds;
}

let countdown = setInterval(remaindingTime, 1000);

remaindingTime();
