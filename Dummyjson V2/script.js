//Alert
window.alert = function (message, timeout) {
    const alert = document.createElement("div");
    const alertButton = document.createElement('button');
    alertButton.innerText = 'OK';
    alert.classList.add('alert');
    alert.setAttribute('style',`
        position:fixed;
        background-color: lightblue;
        top: 100px;
        left: 50%;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 5px 0 #00000022;
        display:flex;
        flex-direction:column;
        border: 1px solid #333;
        transform: translateX(-50%)
    `);
    alertButton.setAttribute('style',`
        border: 1px solid #333;
        background: white;
        border-radius: 5px;
        padding: 5px;
    `)
    alert.innerHTML = `<span style="padding:10px">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', (e)=>{
        alert.remove();
    });
    if (timeout != null) {
        setTimeout(()=>{
            alert.remove();
        }, Number(timeout))
    }
    document.body.appendChild(alert);
}



// Get All Data
$('#all').click(function (e) { 
    e.preventDefault();
    // console.log('halo dek');
    let url = "https://dummyjson.com/products";
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Deskripsi</th><th scope="col">Update</th><th scope="col">Cart</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) { 
                out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td><button type="button" onclick="ubah(${val.id})" class="btn btn-warning me-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">UPDATE</button></td>
                    <td><button type="button" onclick="cart(${val.id})" class="btn btn-primary">+</button></td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Get One Data
$('#dataone').click(function (e) { 
    e.preventDefault();
    // console.log('halo');
    let id = document.getElementById("id").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                out += `<tr>
                    <th scope="row">${response.id}</th>
                    <td>${response.title}</td>
                    <td>${response.description}</td>
                    <td>${response.category}</td>
                </tr>`;
                out += '</tbody></table>';
                $("#tampil").html(out);
        }
    });
});

// Get One of the Category
$('#kategori').click(function (e) { 
    e.preventDefault();
    // console.log('oke');
    let kategori = document.getElementById("selectKate").value;
    if (kategori === "0") {
        alert("Pilih Kategori Terlebih dahulu");
    }
    if (kategori === "smartphones") {
        let url = "https://dummyjson.com/products/category/smartphones";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) { 
                    out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                </tr>`;
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    }
    if (kategori === "laptops") {
        let url = "https://dummyjson.com/products/category/laptops";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) { 
                    out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                </tr>`;
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    }
    if (kategori == "fragrances") {
        let url = "https://dummyjson.com/products/category/fragrances";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) { 
                    out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                </tr>`;
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    }
    if (kategori === "skincare") {
        let url = "https://dummyjson.com/products/category/skincare";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) { 
                    out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                </tr>`;
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    }
    if (kategori == "groceries") {
        let url = "https://dummyjson.com/products/category/groceries";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) { 
                    out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                </tr>`;
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    }
    if (kategori === "home-decoration") {
        let url = "https://dummyjson.com/products/category/home-decoration";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            success: function (response) {
                console.log(response.products);
                let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th></tr></thead><tbody>';
                $.each(response.products, function (key, val) { 
                    out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                </tr>`;
                });
                out += '</tbody></table>';
                $("#tampil").html(out);
            }
        });
    }
});

// Add a New Product
$('#add').click(function (e) { 
    e.preventDefault();
    // console.log('oke');
    let url = "https://dummyjson.com/products/add";
    let produk = $("#produk").val();
    let deskripsi = $("#deskripsi").val();
    let kategori = $("#selected").val();

    let data = {
        title : produk,
        description : deskripsi,
        category : kategori
    };

    $.ajax({
        type: "POST",
        url: url,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

//Delete a Product
$('#del').click(function (e) { 
    e.preventDefault();
    // console.log('hai');
    let id = document.getElementById("idDel").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "DELETE",
        url: url,
        data: id,
        success: function (response) {
            console.log( "Id " + id + " Sudah dihapus");
        }
    });
});

// Show the update
function ubah(idubah) {
    let url = "https://dummyjson.com/products/" + idubah;
    $.ajax({
        type: "get",
        url: url,
        data: "json",
        success: function (response) {
            $(".prod").val(response.title);
            $(".desk").val(response.description);
            $(".idd").val(response.id);
        }
    });
}

// Update Data
$("#update").click(function (e) { 
    e.preventDefault();
    // console.log('sapi');
    let id = $("#ids").val();
    let data = {
        id: $("#ids").val(),
        title: $("#produks").val(),
        description : $("#deskripsis").val()
    };
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "patch",
        url: url,
        bpdy: "data",
        success: function (response) {
            console.log(data);
        }
    });
});


// Search data Pelanggan
$('#allpelanggan').click(function (e) { 
    e.preventDefault();
    // console.log('hai');
    $.ajax({
        type: "get",
        url: "http://localhost/dummyjson-php/php/select.php",
        dataType: "json",
        cache: false,
        success: function (response) {
            // console.log(response);
            let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Pelanggan</th><th scope="col">Alamat</th><th scope="col">Telp</th><th scope="col">Update</th><th scope="col">Delete</th><th scope="col">Cart</th></tr></thead><tbody>';
            $.each(response, function (key, val) { 
                out += `<tr>
                    <th scope="row">${val.idpelanggan}</th>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button type="button" class="btn btn-warning" onclick="selectUpdate(${val.idpelanggan})" data-bs-toggle="modal" data-bs-target="#exampleModal5">UPDATE</button></td>
                    <td><button type="button" class="btn btn-danger" onclick="deletePlgn(${val.idpelanggan})">DELETE</button></td>
                    <td><button type="button" class="btn btn-primary" onclick="cartPel(${val.idpelanggan})">+</button></td>
            </tr>`;
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

//Add a New Pelanggan
$('#addpelanggan').click(function (e) { 
    e.preventDefault();
    let data = {
        pelanggan:$("#nama").val(),
        alamat:$("#alamat").val(),
        telp:$("#telp").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson-php/php/insert.php",
        data: JSON.stringify(data),
        cache: false,
        success: function (response) {
            console.log(response);
            alert(response);
            // let out = `<div class="text-center mt-3"><h3>${response}</h3></div>`
            // $("#tampil").html(out);
        }
    });
});

//Show the update
function selectUpdate(idpelanggan) {
    // console.log(idpelanggan);
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson-php/php/selectupdate.php",
        data: JSON.stringify(data),
        cache: false,
        success: function (response) {
            let data = JSON.parse(response);
            console.log(data);

            $(".iddp").val(data.idpelanggan);
            $(".nama").val(data.pelanggan);
            $(".alamat").val(data.alamat);
            $(".telp").val(data.telp);
        }
    });
}

//Update Pelanggan
$("#updateplgn").click(function (e) { 
    e.preventDefault();
    // console.log('sapi');
    let data = {
        idpelanggan: $("#idpel").val(),
        pelanggan: $("#namapel").val(),
        alamat: $("#alamatpel").val(),
        telp: $("#telppel").val()
    };
    // console.log(data);
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson-php/php/update.php",
        data: JSON.stringify(data),
        cache: false,
        success: function (response) {
            alert(response);
        }
    });
});

//Delete Pelanggan
function deletePlgn(id) {
    // console.log(id);
    let data = {
        idpelanggan: id
    };
    $.ajax({
        type: "post",
        url: "http://localhost/dummyjson-php/php/delete.php",
        data: JSON.stringify(data),
        cache: false,
        success: function (response) {
            alert(response);
        }
    });
}

// Cart Order
function cart(id) {
    let url = "https://dummyjson.com/products/" + id;
    console.log(id);
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        cache: false,
        success: function (response) {
            let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Nama Pemesan</th><th scope="col">Product</th><th scope="col">Harga</th><th scope="col">Jumlah</th></tr></thead><tbody>';
            out += `<h3>Rincian Order :</h3>
                    <tr>
                    <th scope="row">${response.id}</th>
                    <td id="namapemesan">-</td>
                    <td>${response.title}</td>
                    <td>£`+`${response.price}</td>
                    <td><div>
                            <input type="number" class="form-control" style="width: 4rem" id="jumlah">
                        </div>
                    </td>
                    <td><button type="button" class="btn btn-primary" onclick="order('${response.id}','${response.price}','${response.title}')">Order</button></td>
                </tr>`;
            out += '</tbody></table>';
            $("#order").html(out);
        }
    });
}

// Cart Pelanggan
var idpel = "";
var nama = "";
var alamat = "";
function cartPel(idpelanggan) {
    let url = "http://localhost/dummyjson-php/php/selectwhere.php/?id=" + idpelanggan;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            // console.log(response.pelanggan);
            let out = response.pelanggan;
            $("#namapemesan").html(out);
            idpel = response.idpelanggan;
            nama = response.pelanggan;
            alamat = response.alamat;
        }
    });
}

function order(idbarang, harga, barang) {
    let url = "http://localhost/dummyjson-php/php/addtocart.php"
    let idorder = 1;
    let jumlah = $("#jumlah").val();
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idpel,
        pelanggan: nama,
        alamat: alamat
    };
    console.log(data);

    $.ajax({
        type: "post",
        url: url,
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            alert('Data sudah disimpan');
        }
    });
}