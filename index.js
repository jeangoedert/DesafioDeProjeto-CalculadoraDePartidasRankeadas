console.log("Desafio De Projeto: Calculadora de partidas Rankeadas");

let nome = "Formiga Atômica";
let vitorias = 150;
let derrotas = 25;

let saldo = (vitorias - derrotas);
let nivel 

if (saldo < 10) nivel = "Ferro";
else if (saldo >= 11 && saldo <= 20) nivel = "Bronze";
else if (saldo >= 21 && saldo <= 50) nivel = "Prata";
else if (saldo >= 51 && saldo <= 80) nivel = "Ouro";
else if (saldo >= 81 && saldo <= 90) nivel = "Diamante";
else if (saldo >= 91 && saldo <= 100) nivel = "Lendario";
else if (saldo > 100) nivel = "Imortal";
else nivel = "-";

let mensagem =
  nivel !== "-"
    ? `O Herói de nome ${nome} está com saldo de ${saldo} e está no nível de ${nivel}.`
    : `O Herói de nome ${nome} não tem saldo e  nível definido`;
console.log(mensagem);