var newProduct = [];

class Products {
    constructor(discountValue, iva, pvp, id = 0) {
        this.discountValue = discountValue;
        this.iva = iva;
        this.pvp = pvp;
        this.id = id;
    }
}

function getProducts() {
    $.ajax({
        type: "GET",
        url: 'https://mcupacademy.herokuapp.com/api/Products',
        success: function (Products) {
            for (let i = 0; i < Products.length; i++) {
                $('#resultado1').append('<tr><td>' + Products[i].id + '</td><td>' + Products[i].pvp + '</td><td>' + Products[i].iva + '</td><td>' + Products[i].discountValue + '</td></tr>');
            }
        }
    });
}

// acrescentar//
function addProduct(newProduct) {
    $.ajax({
        type: "POST",
        url: 'https://mcupacademy.herokuapp.com/api/Products/',
        contentType:'application/json',
        data: JSON.stringify(newProduct),
        success: function () {
            console.log('Add Product ok');
        }
    });
}

$('#btnAddShelf').click(function () {
    var temp = new Products(parseInt($('#discountValue').val()), parseInt($('#iva').val()), parseInt($('#pvp').val()));
    newProduct.push(temp);
    addProduct(newProduct);
});

// apagar//
function deleteProduct(id) {
    $.ajax({
        type: "DELETE",
        url: 'https://mcupacademy.herokuapp.com/api/Products/' + id,
        success: function () {
            console.log('Product Deleted');
        }
    });
}

$('#btnDelete').click(function () {
    var id=$('#key').val();
    deleteProduct(id);
});

function searchProducts() {
    $.ajax({
        type: "GET",
        url: 'https://mcupacademy.herokuapp.com/api/Products/' + id,
        success: function () {
            console.log('Search success');
        }
    });
}
var id = 0;
