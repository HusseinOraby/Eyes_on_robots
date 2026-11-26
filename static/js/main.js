(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero video: start playing (muted autoplay) ---------- */
  var hero = document.getElementById("heroVideo");
  if (hero) {
    var hp = hero.play();
    if (hp && hp.catch) hp.catch(function () {});
  }

  /* ---------- Experiment videos: play when visible, click to pause or play ---------- */
  var media = document.querySelectorAll(".media");
  media.forEach(function (m) {
    var v = m.querySelector("video");
    if (!v) return;
    v.addEventListener("loadeddata", function () { m.classList.add("loaded"); });
    if (reduceMotion) v.setAttribute("controls", "");
    else m.addEventListener("click", function () { v.paused ? v.play() : v.pause(); });
  });
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target.querySelector("video");
        if (!v) return;
        if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.35 });
    media.forEach(function (m) { io.observe(m); });
  }

  /* ---------- Meters: fill the bars when they scroll into view ---------- */
  var bars = document.querySelectorAll(".m-bar i");
  function fill(el) { el.style.width = el.getAttribute("data-w") + "%"; }
  if ("IntersectionObserver" in window && !reduceMotion) {
    var mo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { fill(e.target); mo.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    bars.forEach(function (b) { mo.observe(b); });
  } else {
    bars.forEach(fill);
  }
})();
