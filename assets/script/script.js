const plus_button = document.getElementById("plus-button");
const minus_button = document.getElementById("minus-button");
const reset_button = document.getElementById("reset");
const number = document.getElementById("number");

let count = 0;

let updateNumber = () => {
    number.innerHTML = count;
}

plus_button.addEventListener('click', () => {

    count += 1;
    updateNumber();

});

minus_button.addEventListener('click', () => {
    
    count -= 1;
    updateNumber();

});

reset_button.addEventListener('click', () => {
    count = 0;
    updateNumber();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));
