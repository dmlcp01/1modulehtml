// funcao que conta ordena numerosem strings; 
// input= string contendo numeros;
// output=string contendo numeros ordenados por ordem decrescente;
function ordenarNumero(n1) {
    n1 = n1.split('');
    var tmp = "";
    
    
    var z = "";
    var index = "";
    for (let z = 0; z < n1.length - 1; z++) {
        for (let index = 0; index < n1.length - 1; index++) {
            const element = n1[index];
            if (parseInt(n1[index]) < parseInt(n1[index+1])) {
                tmp = n1[index];
                n1[index] = n1[index+1];
                n1[index+1] = tmp;
                console.log(n1[index]);
                
            }
        }
        console.log(n1);
    }
    return n1;
}

// main function
function mostrar() {

    var numero1 = document.getElementById("num1").value;
    var result='';
    var numerOrdenado = ordenarNumero(numero1);
    for (let index = 0; index < numerOrdenado.length; index++) {
        const element = numerOrdenado[index];
        result= result+element;
        
    }

    document.getElementById("resultado").innerHTML = result;
}