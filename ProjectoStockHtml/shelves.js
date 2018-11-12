var newShelf = [];

function getShelves() {
    $.ajax({
        type: "GET",
        url: 'https://mcupacademy.herokuapp.com/api/Shelves',
        success: function (Shelves) {
            for (let i = 0; i < Shelves.length; i++) {
                $('#resultado2').append('<tr><td>' + Shelves[i].id + '</td><td>' + Shelves[i].capacity + '</td><td>' + Shelves[i].rentPrice + '</td><td>' + Shelves[i].productId + '</td></tr>');
            }
        }
    });
}

class Shelf{
    constructor (capacity, rentPrice, productId, id=0){
        this.capacity=capacity;
        this.rentPrice=rentPrice;
        this.productId=productId;
        this.id=id;
    }
}

function addShelf (newShelf) {
    $.ajax({
        type: "POST",
        url: 'https://mcupacademy.herokuapp.com/api/Shelves',
        contentType:'application/json',
        data: JSON.stringify(newShelf),
        success: function () {
            console.log('Add Shelf ok');
        }
    });
}

$('#btnAdd').click(function () {
    var temp = new Shelf(parseInt($('#capacity').val()), parseInt($('#rentPrice').val()), parseInt($('#productID').val()));
    newShelf.push(temp);
    addShelf(newShelf);
});

// apagar//
function deleteShelf(id) {
    $.ajax({
        type: "DELETE",
        url: 'https://mcupacademy.herokuapp.com/api/Shelves/' + id,
        success: function () {
            console.log('Shelf Deleted');
        }
    });
}

$('#btnDeleteShelf').click(function () {
    var id=$('#keyS').val();
    deleteProduct(id);
});
