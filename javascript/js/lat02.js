// document.querySelector("#paragraf").innerHTML = "Saya belajar Javascript";

// document.querySelector("#konten").innerHTML = "<h1> Ganti isi </h1>";

let tanggal = 22;
let bulan   = 1;
let hasil   = "Tanggal / Bulan Salah";
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 12) {
    hasil = "Tanggal dan Bulan Benar";
    if (bulan == 1) {
        hasil = "Zodiak anda Aquarius ";
        if (tanggal < 20) {
            hasil = "Zodiak anda Capricorn"; 
        } 
    }
    if (bulan == 2) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Aquarius";
        } else {
            hasil = "Zodiak anda Pisces";
        }
    }
    if (bulan == 3) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Pisces";
        } else {
            hasil = "Zodiak anda Aries";
        }
    }
    if (bulan == 4) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Aries";
        } else {
            hasil = "Zodiak anda Taurus";
        }
    }
    if (bulan == 5) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Taurus";
        } else {
            hasil = "Zodiak anda Gemini";
        }
    }
    if (bulan == 6) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Gemini";
        } else {
            hasil = "Zodiak anda Cancer";
        }
    }
    if (bulan == 7) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Cancer";
        } else {
            hasil = "Zodiak anda Leo";
        }
    }
    if (bulan == 8) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Leo";
        } else {
            hasil = "Zodiak anda Virgo";
        }
    }
    if (bulan == 9) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Virgo";
        } else {
            hasil = "Zodiak anda Libra";
        }
    }
    if (bulan == 10) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Libra";
        } else {
            hasil = "Zodiak anda Scorpio";
        }
    }
    if (bulan == 11) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Scorpio";
        } else {
            hasil = "Zodiak anda Sagitarius";
        }
    }
    if (bulan == 12) {
        if (tanggal < 20) {
            hasil = "Zodiak anda Sagitarius";
        } else {
            hasil = "Zodiak anda Capricorn";
        }
    }
} 
// console.log(hasil);
document.querySelector("#konten").innerHTML = "<h1>" + hasil + "</h1>";