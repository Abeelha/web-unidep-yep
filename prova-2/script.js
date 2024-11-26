// Gallery
const images = [
    "../images/background-MrRobot-2.jpg",
    "../images/background-MrRobot-3.jpg",
    "../images/background-MrRobot-4.png",
    "../images/background-MrRobot.jpg"
];
let currentIndex = 0;

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("gallery-image").src = images[currentIndex];
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("gallery-image").src = images[currentIndex];
});

// Form Validation
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let valid = true;

    if (name.value.trim() === "") {
        valid = false;
        document.getElementById("name-error").textContent = "Nome é obrigatório.";
    } else {
        document.getElementById("name-error").textContent = "";
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        document.getElementById("email-error").textContent = "Email inválido.";
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (password.value.length < 6) {
        valid = false;
        document.getElementById("password-error").textContent = "Senha deve ter ao menos 6 caracteres.";
    } else {
        document.getElementById("password-error").textContent = "";
    }

    if (valid) {
        alert("Cadastro realizado com sucesso!");
    }
});