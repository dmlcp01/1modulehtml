/**
 * descrption
 * @param {string} combustivel .
 * @param {string} cor .
 * @param {number} numeroRodas .  
 */



class Veiculo {
    constructor(combustivel, cor, numeroRodas = 2) { // numero de rodas por default e 2
        this.combustivel = combustivel;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros = 0;
    }
    andar(distancia = 1) {
        this.contaQuilometros += distancia;
        return "Andou " + distancia;
    }
}
// var v1 = new Veiculo("gasoleo", "red", 4);
// v1.andar(10);
// console.log("v1 contaQuiloometros:", v1.contaQuilometros);

class Automovel extends Veiculo {
    constructor(combustivel, cor, numeroAssentos, numeroPortas) {
        super(combustivel, cor, 4);
        this.numeroAssentos = numeroAssentos;
        this.numeroPortas = numeroPortas;
        this.numeroVolantes = 1;
        this.litrosDeposito = 10;
    }
    porCombustivel(litros) {
        this.litrosDeposito += litros;
    }
    tirarCombustivel(litros) {
        this.litrosDeposito -= litros;
    }
    andar(distancia) {
        super.andar(distancia);
        this.litros -= distancia;
        return "Gastou " + distancia + "litros";
    }
}
var auto1 = new Automovel("Gasolina95", "Preto", 2, 4);
auto1.andar();