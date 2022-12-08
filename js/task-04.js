const counterValue = document.querySelector('#value');

let count = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counterValue.textContent = count -= 1;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    counterValue.textContent = count += 1;
});