let isi = document.querySelector("#isi");
isi.innerHTML = "<h1> Soto </h1>" + "<p> Deskripsi Soto </p>" + "<img src ='./images/bakwan.jpg' width = '200px' > " ;

isi.innerHTML = "<h1> Rawon </h1>";
isi.innerHTML += "<p> Deskripsi Rawon </p>";
isi.innerHTML += "<img src ='./images/bakwan.jpg' width = '200px' > "; 


for (let i = 0; i < 10; i++) {
    // console.log(i);
    document.querySelector("#paragraf").innerHTML += "<h1>" + i + "</h1>";
}

let tabel = document.querySelector("#tabel");
// tabel.innerHTML =   "<table>"
//                     +"<thead><tr><th> Nomer </th></tr></thead>"
//                     +"<tbody>"
//                         +"<tr><td> 1 </td></tr>"
//                         +"<tr><td> 2 </td></tr>"
//                         +"<tr><td> 3 </td></tr>"
//                         +"<tr><td> 4 </td></tr>"
//                         +"<tr><td> 5 </td></tr>"
//                     +"</tbody>"
//                     +"</table>"

tabel.innerHTML = "<table>";
tabel.innerHTML += "<thead><tr><th> Nomer </th></tr></thead>";
tabel.innerHTML += "<tbody>";
// tabel.innerHTML += "<tr><td> 1 </td></tr>";
// tabel.innerHTML += "<tr><td> 2 </td></tr>";
// tabel.innerHTML += "<tr><td> 3 </td></tr>";
// tabel.innerHTML += "<tr><td> 4 </td></tr>";
// tabel.innerHTML += "<tr><td> 5 </td></tr>";


for (let index = 1; index < 11; index++) {
    tabel.innerHTML += "<tr><td>" + index  + "</tr></td>";
}

tabel.innerHTML += "</tbody>";
tabel.innerHTML += "</table>";