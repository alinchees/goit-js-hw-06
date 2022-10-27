let counterValue = 0;
const btnDecrement = document.querySelector('#counter button[data-action="decrement"]')
const btnIncrement = document.querySelector('#counter button[data-action="increment"]')
const value = document.querySelector('#value')
btnDecrement.addEventListener("click",()=>{
    counterValue --;
    value.textContent = counterValue;
});
btnIncrement.addEventListener("click",()=>{
    counterValue ++;
    value.textContent = counterValue;
});
