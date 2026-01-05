
let password = document.querySelector("#password");
let Btn = document.querySelector("#btn");

Btn.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        Btn.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        Btn.classList.replace("fa-eye-slash", "fa-eye");
    }
});

let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let cityInput = document.querySelector("#city");
let registerBtn = document.querySelector("#register");
let output = document.querySelector("#output");

registerBtn.addEventListener("click", () => {

    let name = nameInput.value;
    let age = ageInput.value;
    let city = cityInput.value;

    if (name === "" || age === "" || city === "") {
        alert("Please fill all details");
        return;
    }

    output.innerHTML = `
        <h3>Submitted Student Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>City:</b> ${city}</p>
    `;
});

registerBtn.addEventListener("click", () => {

    let name = nameInput.value;
    let age = ageInput.value;
    let city = cityInput.value;

    if (name === "" || age === "" || city === "") {
        alert("Please fill all details");
        return;
    }

    output.innerHTML = `
        <h3>Submitted Student Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>City:</b> ${city}</p>
    `;

    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    password.value = "";
});

