function mostrar () { // declarar funcao

// var nome = prompt ("Qual é o seu nome?");// pop-up a perguntar o nome

// alert ("Welcome " + nome); // pop-up de bem-vindo
// }
// mostrar (); // chamar funcao

var input1 = document.getElementById("ipt1").value;
document.getElementById("result").innerHTML=input1;
document.getElementById("btn1").style.display= "none"; // fazer botao desaparecer depois de selectionado
document.getElementById("label").style.display="none"; // fazer label desaparecer depois de clickar no botao
document.getElementById("h1").style.color= "magenta"; // mudar a cor depois de clickar no botao
var count = document.getElementById('result').innerHTML.split(' ').length
}