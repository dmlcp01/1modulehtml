/*
* Function para imprimir ready
*/
$(document).ready(function () {
    $('#table').css('display','none');
    console.log("ready!");
    $( "#btn1" ).click(main);
});
/*
* Function para compprar n de ocorrencias de caracteres numa string
* @param ""; 
* @return tabela com [caracter, numero de ocorrencias]  
*/
function contar() {
    var ipt1 = $("#num1").val(); // para ir buscar os valores da variavel ao documento
    var ipt1 = ipt1.split('');
    var obj = {}; // para criar o objecto;
 
    for (let i = 0; i < ipt1.length; i++) {

        if (obj[(ipt1[i])] == undefined) {
            obj[ipt1[i]] = 1;

        } else {
            obj[ipt1[i]]++;
        }
    }

    return obj;
}
/*
* Function cria uma tabela com o resultado
* @param array;
* @return tabela  
*/
function getTableRow(caracter,num) {
    return `<tr>
    <td>${caracter}</td>
    <td>${num}</td>
</tr>`;
}
/*
* Function principal executa o programa
* @param numero; param sequencia qualquer de numeros
* @return ""  
*/

function main() {
    var resultado =contar();
    console.log(resultado);
    var keys=Object.keys(resultado);
    $('#table').css('display','block');
    for (let index = 0; index < keys.length; index++) {
       $('#resultado').append(getTableRow(keys[index],resultado[keys[index]]));
    }

};