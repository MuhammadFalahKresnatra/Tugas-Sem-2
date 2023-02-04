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
            let out = '<table class="table mt-4"><thead><tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Category</th><th scope="col">Update</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) { 
                out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.category}</td>
                    <td><button type="button" onclick="ubah(${val.id})" class="btn btn-warning me-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">UPDATE</button></td>
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

