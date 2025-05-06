let money = 0;
let perClick = 1;
let upgradeCost = 10;
let autoCost = 50;
let autoServe = false;
let served = 0;

const moneyEl = document.getElementById('money');
const perClickEl = document.getElementById('perClick');
const upgradeCostEl = document.getElementById('upgradeCost');
const autoCostEl = document.getElementById('autoCost');
const servedEl = document.getElementById('served');
const fortuneEl = document.getElementById('fortune');

const fortunes = [
  "茶能醉人亦能醒人",
  "人生如茶，沉时坦然，浮时淡然",
  "一盏清茶，一段静谧",
  "茶香四溢，心静自然凉",
  "品茗如品人生",
  "茶之道，即人之道"
];

function updateDisplay() {
  moneyEl.textContent = money;
  perClickEl.textContent = perClick;
  upgradeCostEl.textContent = upgradeCost;
  autoCostEl.textContent = autoCost;
  servedEl.textContent = served;
}

document.getElementById('serveTea').addEventListener('click', () => {
  money += perClick;
  served++;
  updateDisplay();
});

document.getElementById('upgradeBtn').addEventListener('click', () => {
  if (money >= upgradeCost) {
    money -= upgradeCost;
    perClick += 1;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    updateDisplay();
  }
});

document.getElementById('autoBtn').addEventListener('click', () => {
  if (money >= autoCost && !autoServe) {
    money -= autoCost;
    autoServe = true;
    document.getElementById('autoBtn').disabled = true;
    setInterval(() => {
      money += perClick;
      served++;
      updateDisplay();
    }, 1000);
  }
});

// Passive income every second
setInterval(() => {
  money += Math.floor(perClick / 2);
  updateDisplay();
}, 1000);

// Show a new fortune every 60 seconds
setInterval(() => {
  const msg = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneEl.textContent = `“${msg}”`;
}, 60000);
