// Modalı aç ve resmi büyüt
function showImage(img) {
    let modal = document.getElementById("resimModal");
    let modalImg = document.getElementById("buyutulmusResim");

    modalImg.src = img.src; // Resmi değiştir
    modal.style.display = "flex"; // Modalı aç
    setTimeout(() => { modal.classList.add("show"); }, 10); // Animasyonu tetikle
}

// Modalı kapat
function hideImage() {
    let modal = document.getElementById("resimModal");

    modal.classList.remove("show"); // Yavaşça kaybolmasını sağla
    setTimeout(() => { modal.style.display = "none"; }, 300); // Animasyon bitince tamamen gizle
}

// Sayfa yüklendiğinde kapatma olaylarını ekle
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("resimModal");

    // Modalın dışına tıklanınca kapat
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            hideImage();
        }
    });
});
