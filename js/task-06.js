const handelInput = document.querySelector('#validation-input');
handelInput.addEventListener("blur", even =>{
    const sizeInput = even.target.getAttribute('data-length')
if (even.target.value.length == sizeInput) {
    even.target.classList.add('valid');
    even.target.classList.remove('invalid');
    return;
}
    even.target.classList.add('invalid');
    even.target.classList.remove('valid');
})