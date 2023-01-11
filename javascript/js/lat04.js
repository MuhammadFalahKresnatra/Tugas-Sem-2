zodiak(4, 23);
function zodiak(bln, tgl) {
    let hasil = "Salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "Zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Capricorn";
            if (tgl > 21) {
                hasil = "Aquarius";
            }
        }
        if (bln == 2 && tgl < 30) {
            hasil = "Aquarius";
            if (tgl > 18 ) {
                hasil = "Pisces";
            }
        }
        if (bln == 4 && tgl < 31) {
            hasil = "Aries";
            if (tgl > 10 ) {
                hasil = "Taurus";
            }
        }
    }
    console.log(hasil);
}

lulus(92);
function lulus(nilai) {
    let kkmc = 70;
    let kkmb = 84;
    let kkma = 91;
    let hasil = "Nilai salah";
    if (nilai > 0 && nilai <= 100 ) {
        if (nilai > kkmc) {
            hasil = "LULUS DENGAN PREDIKAT C";
        }
        if (nilai > kkmb) {
            hasil = "LULUS DENGAN PREDIKAT B";
        }
        if (nilai > kkma) {
            hasil = "LULUS DENGAN PREDIKAT A";
        }
        if (nilai <= kkmc) {
            hasil = "TIDAK LULUS";
        }
    }
    console.log(hasil);
}

console.log(terbilang(320));
function terbilang(angka) {
    let bilangan=[
        " ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"
    ];

		if(angka < 12){

			return bilangan[angka];

		}else if(angka < 20){

			return terbilang(angka-10)+" belas";

		}else if(angka < 100){

			return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

		}else if(angka < 200){

			return "seratus "+terbilang(parseInt(angka)-100);

		}else if(angka < 1000){

			return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

		}else if(angka < 2000){

			return "seribu "+terbilang(parseInt(angka)-1000);

		}else if(angka < 1000000){

			return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

		}else if(angka < 1000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

		}else if(angka < 1000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyard "+terbilang(parseInt(angka)%1000000000);

		}else if(angka < 1000000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" triliun "+terbilang(parseInt(angka)%1000000000000);

		}
}

prima(6257)
function prima(bilangan) {
    let prima = true
    let hasil = "";
    if (bilangan < 2) {
        hasil = "Tidak Valid (Bil Prima dimulai dari angka 2)";
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i === 0) {
                prima = false;
            }
        }
        if (prima) {
            hasil = bilangan + " Merupakan bilangan Prima";
        }else{
            hasil = bilangan + " Bukan bilangan Prima";
        }
    }
    console.log(hasil);
}