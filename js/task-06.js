const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onCheckContent);

function onCheckContent() {
    inputEl.classList.add("invalid")
    if (inputEl.value.length === Number(inputEl.dataset.length)) { inputEl.classList.replace ("invalid", "valid") };    
};