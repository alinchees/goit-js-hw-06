const handelSubmitEmail = document.querySelector(".login-form");
const obj = {};
handelSubmitEmail.addEventListener("submit", (even) => {
  even.preventDefault();
  const {
    elements: { email, password },
  } = even.target;
  if (email.value === "" && password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  obj[email.name] = email.value;
  obj[password.name] = password.value;
  even.currentTarget.reset();
});
console.log(obj);
