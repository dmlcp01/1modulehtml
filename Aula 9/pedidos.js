
/*
* Function getExtra para obter o numero de pedidos com personalizacao;
* @param []; 
* @return Numero;
*/
function getExtra(data) {
    var arr1 = data;
    var resultado=[];
    for (let index = 0; index < arr1.length; index++) {
        console.log(1);
        let order = arr1[index].pedido
        for (let i = 0; i < order.length; i++) {
            console.log(2);
            if (order[i].personalizacao!= undefined && resultado.indexOf(arr1[index])== -1){
                resultado.push(arr1[index]);
            }
        }
    }
    return console.log(resultado);
}

//var pedidosExtra=getExtra(data);
function main() {
    $.ajax({
        url:http://192.168.0.122:3000/api/orders,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        },
    })
    getExtra(data);
}