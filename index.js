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

// Sayfa değiştirme fonksiyonu
function showPage(pageId) {
    let pages = document.querySelectorAll("section");
    pages.forEach(page => page.style.display = "none"); // Tüm bölümleri gizle
    document.getElementById(pageId).style.display = "block"; // Seçili sayfayı göster

    // Eğer "istatistikler" açıldıysa veri çekme fonksiyonunu çalıştır
    if (pageId === "istatistikler") {
        fetchMatchStats(); // stats.js içindeki fonksiyon
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // 🛠️ fetchMatchStats fonksiyonu tanımlı mı kontrol et
    if (typeof fetchMatchStats !== "function") {
        console.error("⚠️ HATA: fetchMatchStats fonksiyonu bulunamadı! stats.js düzgün yüklenmiş mi kontrol et.");
        return;
    }

    // Sayfa değiştirme fonksiyonu
    function showPage(pageId) {
        let pages = document.querySelectorAll("section");
        pages.forEach(page => page.style.display = "none"); // Tüm bölümleri gizle
        document.getElementById(pageId).style.display = "block"; // Seçili sayfayı göster

        // Eğer "istatistikler" açıldıysa veri çekme fonksiyonunu çalıştır
        if (pageId === "istatistikler") {
            fetchMatchStats();
        }
    }

    // Menüye tıklama olaylarını ekleyelim
    document.querySelector('nav').addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            let targetPage = event.target.getAttribute('href').replace('.html', ''); // ID'yi al

            // Eğer iç sayfa ise yönlendirme yapmadan içeriği değiştir
            if (document.getElementById(targetPage)) {
                event.preventDefault(); // Varsayılan yönlendirmeyi engelle
                showPage(targetPage);
            }
        }
    });

   
});


    

