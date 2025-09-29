alert("Bem vindo ao jogo do numero secreto!");
let numeroMaximo = 200
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1
while(chute != numeroSecreto){
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break
        } else {
            if (numeroSecreto > chute) {
                alert(`O numero secreto é maior que ${chute}`);
            } else {
                alert(`O numero secreto é menor que ${chute}`);
            }
            }
            tentativas++;
        }
let testeTentativas = tentativas > 1 ? "tentativas" : "tentativa"
// if (tentativas > 1) {
//     alert(`Isso aí, você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí, você descobriu o número secreto! ${numeroSecreto} com 1 tentativa.`);
// }
alert(`Isso aí, você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${testeTentativas}.`);
