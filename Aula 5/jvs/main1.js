function contaEspacos(frase) {   // funcao que conta espacos em branco; input= strg; output=number;
    var numeroEspacos = 0;
    for (let index = 0; index < frase.length; index++) {
        const element = frase[index];
        if (element == " ")
            numeroEspacos++;
    }
    return numeroEspacos;
}
function mostrar() {
    var texto1 = document.getElementById("frase1").value;
    var texto2 = document.getElementById("frase2").value;
    var res1 = contaEspacos(texto1);
    var res2 = contaEspacos(texto2);
    document.getElementById("res1").innerHTML = `No primeiro estavam ${res1} espacos.`; // para injectar variavel dentro de string
    document.getElementById("res2").innerHTML = `No segundo estava ${res2} espacos.`;
}