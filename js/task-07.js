const scrollBarEl = document.querySelector("input");

const textEl = document.querySelector("#text");

scrollBarEl.addEventListener("input", onScroll);

function onScroll() {
    textEl.style.fontSize = `${scrollBarEl.value}px`;
};