let tampilan = document.form.textarea;

function tampil(num){ 
	tampilan.value += num;
}

function hitung(){
	let hasil = tampilan.value;
	tampilan.value = eval(hasil);
}

function clean() {
    tampilan.value = "";
}

function del() {
    let del = tampilan.value;
    tampilan.value = del.substring(0,del.length-1);
}