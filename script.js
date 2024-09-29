document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    if (!name) {
        formMessage.textContent = "Введите имя";
        return;
    }
    
    const email = document.getElementById("email").value.trim();
    if (!email || !validateEmail(email)) {
        formMessage.textContent = "Введите корректный email";
        return;
    }
    
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
    if (!message) {
        formMessage.textContent = "Введите сообщение";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Ваше сообщение отправлено!";
    document.getElementById("contactForm").reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
