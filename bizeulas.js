document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("eoN4Sf_bBF3VHLHCQ"); // Public Key burada

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini önler

        // Kullanıcının girdiği verileri al
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // EmailJS parametreleri
        let templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // EmailJS ile mail gönder
        emailjs.send("service_ksb7szj", "template_bf53frn", templateParams)
            .then(function (response) {
                console.log("E-posta başarıyla gönderildi!", response);
                document.getElementById("result").innerText = "Mesajınız başarıyla gönderildi!";
                document.getElementById("contact-form").reset(); // Formu temizle
            }, function (error) {
                console.error("Hata oluştu:", error);
                document.getElementById("result").innerText = "Mesaj gönderilirken bir hata oluştu.";
            });
    });
});
