saldoDaConta = 10000;
senhaDaConta = 159478;  
let senhaDigitada 

while (senhaDigitada != senhaDaConta) {
    senhaDigitada = prompt ("qual a senha da conta?");

    if (senhaDigitada == senhaDaConta) {
        alert (`Seu saldo atual é ${saldoDaConta} me empresta uma grana ai meu consagras!`);
    } else {
        alert ("você digitou a senha errada, tente novamente!");
    }
    
}
