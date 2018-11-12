function principal() {
    var consumidor = $("#firstName").val();
    var nome = $("#artigo").val();
    var personalizacao = $("#extra").val();
    var p2 = new Artigo(nome, personalizacao);
    var fact = new Factura(consumidor, p2);
    // addFactura(fact);
    
    pushOrder(fact);
    updateTable();
}


