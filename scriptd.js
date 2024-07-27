let bars = [
  { bar: document.getElementById("bar1"), percent: document.getElementById("percent1"), value: 0 },
  { bar: document.getElementById("bar2"), percent: document.getElementById("percent2"), value: 0 },
  { bar: document.getElementById("bar3"), percent: document.getElementById("percent3"), value: 0 },
  { bar: document.getElementById("bar4"), percent: document.getElementById("percent4"), value: 0 }
];

let finaleValue = 100;
let speed = 10;

let timer = setInterval(() => {
  bars.forEach(barObj => {
      barObj.value += 1;
      barObj.bar.style.background = `conic-gradient(#4285f4 ${barObj.value / 100 * 360}deg, #e8f0f7 0deg)`;
      barObj.percent.innerHTML = barObj.value + "%";
      
      if (barObj.value >= finaleValue) {
          clearInterval(timer);
      }
  });
}, speed);
