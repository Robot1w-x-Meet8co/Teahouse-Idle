let money = 0;
let perClick = 1;
let upgradeCost = 10;

const moneyEl = document.getElementById('money');
const perClickEl = document.getElementById('perClick');
const upgradeCostEl = document.getElementById('upgradeCost');

document.getElementById('serveTea').addEventListener('click', () => {
  money += perClick;
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

function updateDisplay() {
  moneyEl.textContent = money;
  perClickEl.textContent = perClick;
  upgradeCostEl.textContent = upgradeCost;
}

// Passive income
setInterval(() => {
  money += Math.floor(perClick / 2);
  updateDisplay();
}, 1000);
