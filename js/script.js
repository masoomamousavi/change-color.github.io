// ===== First Task ============================
let btn = document.getElementById('btn');
let body = document.getElementById('body');
let color = document.getElementById('color');

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let hexColor = '#';
function colorSet() {
    body.style.backgroundColor = generateColor();
    color.innerHTML = hexColor;
}
btn.addEventListener('click', function () {
    colorSet();
})
function generateColor() {
    hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNum()];
    }
    return hexColor;
}

function randomNum() {
    return Math.floor(Math.random() * hex.length);
}

window.addEventListener('load', function () {
    colorSet();
})
// ====================================================

// ========== Second Task ============
let counter = document.getElementById('counter');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');
num = 0;
decrease.addEventListener('click', function () {
    num -= 1;
    counter.innerHTML = num;
    if (num < 0) {
        counter.style.color = "red";
    }
})

increase.addEventListener('click', function () {
    num += 1;
    counter.innerHTML = num;
    if (num > 0) {
        counter.style.color = "green";
    }
})

reset.addEventListener('click', function () {
    num = 0;
    counter.innerHTML = num;
    if (num == 0) {
        counter.style.color = "white";
    }
})

// function increaseChar() {
//     num += 1;
// }

// function decreaseChar() {
//     num -= 1;
// }

// function resetChar() {
//     num = 0;
// }

