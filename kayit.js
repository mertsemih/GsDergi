function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("register-message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!name || !email || !password) {
        message.innerText = "Lütfen tüm alanları doldurun.";
        message.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)) {
        message.innerText = "Geçerli bir e-posta adresi girin.";
        message.style.color = "red";
        return;
    }

    if (!passwordRegex.test(password)) {
        message.innerText = "Şifre en az 1 büyük harf ve 1 rakam içermelidir (min 6 karakter).";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    
    message.innerText = "Kayıt başarılı! Şimdi giriş yapabilirsiniz.";
    message.style.color = "green";
}

function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const message = document.getElementById("login-message");

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        message.innerText = "Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz...";
        message.style.color = "green";

        // Kullanıcıyı ana sayfaya yönlendir
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        message.innerText = "Hatalı e-posta veya şifre!";
        message.style.color = "red";
    }
}