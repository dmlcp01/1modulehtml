/*
* Function para imprimir ready
*/
$(document).ready(function () {
    console.log("ready!");
});

/*
* Function substituir coloca um - entre dois numeros paresconsecutivos e um # entre dois numeros impares consecutivos 
* @param numero; param sequencia qualquer de numeros
* @return ""  
*/

function substituir(n1) {
    let numeros = n1.split('');
    var result = [numeros[0]];

    for (let j = 1; j < numeros.length - 1; j++) {
        const element = numeros[j];
        if (parseInt(numeros[j-1]) % 2 === 0 && parseInt((numeros[j])) % 2 === 0) {
            result.push('-',numeros[j]);
            console.log(result);

        }
        else if (parseInt(numeros[j-1]) % 2 !== 0 && parseInt((numeros[j])) % 2 !== 0) {
                result.push('#',numeros[j]);
                console.log(result);
            }
            else {
                result.push(numeros[j]);
            }
    }

    if (parseInt(numeros[numeros.length - 2]) % 2 === 0 && parseInt((numeros[numeros.length - 1])) % 2 === 0) {
        result.push('-', numeros[numeros.length - 1]);
        console.log(result);

    }
    if (parseInt(numeros[numeros.length - 2]) % 2 !== 0 && parseInt((numeros[numeros.length - 1])) % 2 !== 0) {
        result.push('#', numeros[numeros.length - 1]);
    }



    return result.join('');
}

/*
* Function principal  executa o programa
* @param numero; param sequencia qualquer de numeros
* @return ""  
*/

function main() {
    var str = $('#num1').val();
    $('#resultado').html(substituir(str));
}


