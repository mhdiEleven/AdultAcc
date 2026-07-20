let cash = 30;
let total = 150;

const hiddenElements = document.querySelectorAll('.hidden');
const valueElements = document.querySelectorAll('.value');
const fill = document.querySelector('.fill');
const btn = document.getElementById('btn');
const perc = document.getElementById("percenty")
hiddenElements.forEach(el => {
        el.style.display = 'none';
    });
// ---- HIDE / SHOW ----
function setHidden(state) {
    hiddenElements.forEach(el => {
        el.style.display = state ? 'none' : '';
    });
}

// press "p" → show
document.addEventListener('keydown', (e) => {
    if (e.key === 'p') {
        setHidden(false);
    }
});

// click button → hide + add money
if (btn) {
    btn.addEventListener('click', () => {
        setHidden(true);

        cash += 100;
        total += 100;

        updateUI();
    });
}

// ---- UPDATE UI ----
function updateUI() {
    // percent used (THIS is the fix)
    const percent = 100 - ((cash / total) * 100);

    if (fill) {
        fill.style.width = percent + '%';
    }

    valueElements.forEach(el => {
        el.innerHTML = `${cash}.00da`;
        perc.innerHTML = `${percent.toFixed(1)}% من المصروف اليومي `
    });
}

// initial render
updateUI();