let snowflakesCount = 200;
let baseCss = ``;
if (typeof SNOWFLAKES_COUNT !== "undefined") {
  snowflakesCount = SNOWFLAKES_COUNT;
}
if (typeof BASE_CSS !== "undefined") {
  baseCss = BASE_CSS;
}
let bodyHeightPx = null;
let pageHeightVh = null;
function setHeightVariables() {
  bodyHeightPx = document.body.offsetHeight;
  pageHeightVh = (100 * bodyHeightPx) / window.innerHeight;
}
function getSnowAttributes() {
  const snowWrapper = document.getElementById("snow");
  if (snowWrapper) {
    snowflakesCount = Number(
      snowWrapper.attributes?.count?.value || snowflakesCount
    );
  }
}
function showSnow(value) {
  if (value) {
    document.getElementById("snow").style.display = "block";
  } else {
    document.getElementById("snow").style.display = "none";
  }
}
function spawnSnow(snowDensity = 200) {
  snowDensity -= 1;
  for (let i = 0; i < snowDensity; i++) {
    let board = document.createElement("div");
    board.className = "snowflake";
    document.getElementById("snow").appendChild(board);
  }
}
function addCss(rule) {
  let css = document.createElement("style");
  css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
}
function randomInt(value = 100) {
  return Math.floor(Math.random() * value) + 1;
}
function randomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function spawnSnowCSS(snowDensity = 200) {
  let snowflakeName = "snowflake";
  let rule = baseCss;
  for (let i = 1; i < snowDensity; i++) {
    let randomX = Math.random() * 100;
    let randomOffset = Math.random() * 10;
    let randomXEnd = randomX + randomOffset;
    let randomXEndYoyo = randomX + randomOffset / 2;
    let randomYoyoTime = getRandomArbitrary(0.3, 0.8);
    let randomYoyoY = randomYoyoTime * pageHeightVh;
    let randomScale = Math.random();
    let fallDuration = randomIntRange(10, (pageHeightVh / 10) * 3);
    let fallDelay = randomInt((pageHeightVh / 10) * 3) * -1;
    let opacity = Math.random();
    rule += `
      .${snowflakeName}:nth-child(${i}) {
        opacity: ${opacity};
        transform: translate(${randomX}vw, -10px) scale(${randomScale});
        animation: fall-${i} ${fallDuration}s ${fallDelay}s linear infinite;
      }
      @keyframes fall-${i} {
        ${randomYoyoTime * 100}% {
          transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
        }
        to {
          transform: translate(${randomXEndYoyo}vw, ${pageHeightVh}vh) scale(${randomScale});
        }
      }
    `;
  }
  addCss(rule);
}
createSnow = function () {
  setHeightVariables();
  getSnowAttributes();
  spawnSnowCSS(snowflakesCount);
  spawnSnow(snowflakesCount);
};
if (typeof module !== "undefined") {
  module.exports = {
    createSnow,
    showSnow,
  };
} else {
  window.onload = createSnow;
}
