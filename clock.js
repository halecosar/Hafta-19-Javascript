var userName = prompt("İsminizi Giriniz");
document.getElementById("myName").innerHTML =  userName;

function time() {
    var now = new Date();
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var second = now.getSeconds();

    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var day = days[now.getDay()];

    // Saat ve gün bilgilerini ekrana yazdırma
    document.getElementById("myClock").innerHTML = "Saat: " + hours + ":" + minutes + ":" + second + "<br>Gün: " + day;
    
}
setInterval(time, 1000);

// Sayfa yüklendiğinde time fonksiyonunu çağırıyoruz
time();