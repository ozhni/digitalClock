"use strict";
//
//
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const updateClock = function () {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "Am";

  if (h > 12) {
    h = h - 12;
    ampm = "pm";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
};

updateClock();
