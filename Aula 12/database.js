
var facturas = [];
// function addFactura(fact) {
//     facturas.push(fact);
// }

function pushOrder(fact) {
    console.log(1);
    $.ajax({
        type: "POST",
        url: 'http://192.168.0.122:3000/api/orders',
        data:JSON.stringify(fact),
        contentType: 'application/json',
        success: function (fact) {
            console.log(fact);
        }
    });
}