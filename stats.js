async function fetchMatchStats() {
    const url = "https://v3.football.api-sports.io/fixtures?league=203&season=2023";
    const apiKey = "45dc472609381931830a0602554f5574"; // Buraya kendi API anahtarını yaz

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "x-apisports-key": apiKey
            }
        });
        const data = await response.json();
        let statsHTML = "<h2>Galatasaray Maç İstatistikleri</h2>";
        
        data.response.forEach(match => {
            if (match.teams.home.name === "Galatasaray" || match.teams.away.name === "Galatasaray") {
                statsHTML += `
                    <div class="match">
                        <p><strong>Takımlar:</strong> ${match.teams.home.name} - ${match.teams.away.name}</p>
                        <p><strong>Skor:</strong> ${match.goals.home} - ${match.goals.away}</p>
                        <p><strong>Tarih:</strong> ${new Date(match.fixture.date).toLocaleDateString()}</p>
                        <p><strong>Hakem:</strong> ${match.fixture.referee || "Bilinmiyor"}</p>
                        <p><strong>Stadyum:</strong> ${match.fixture.venue.name}</p>
                        <hr>
                    </div>
                `;
            }
        });
        
        document.getElementById("match-stats").innerHTML = statsHTML;
    } catch (error) {
        console.error("Hata:", error);
        document.getElementById("match-stats").innerHTML = "Veri çekilirken hata oluştu.";
    }
}
fetchMatchStats();