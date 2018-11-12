var data = [];
class Factura {
    constructor(consumidor, pedido) {
        this.id = new Date().getTime();
        this.consumidor = consumidor;
        this.pedidos = [pedido];
    }
    addPedido(p) {
        this.pedidos.push(p);
    }
    getPedido(pedidos) {
        var arr1 = pedidos;
        var resultado = [];
        for (let index = 0; index < arr1.length; index++) {
            let order = arr1[index].pedido
            for (let i = 0; i < order.length; i++) {
                if (order[i].personalizacao != undefined && resultado.indexOf(arr1[index]) == -1) {
                    resultado.push(arr1[index]);
                }
            }
        }
        return console.log(resultado);
    }
}

class Artigo {
    constructor(nome, personalizacao) {
        this.nome = nome;
        this.personalizacao = personalizacao;
    }
}

function main() {
    var consumidor = $("#firstName").val();
    var nome = $("#artigo").val();
    var personalizacao = $("#extra").val();
    var p2 = new Artigo(nome, personalizacao);
    var fact = new Factura(consumidor, p2);
    console.log(fact);
}
