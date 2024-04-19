var senhaDoCofre = 18795;
var senhaDigitada;
var tentativas = 0;


while (senhaDigitada != senhaDoCofre) {
    senhaDigitada = prompt ("Digite a senha do cofre.");
    
    if (senhaDigitada == senhaDoCofre) {
        tentativas++;
        alert (`Parabéns, você acertou a senha do cofre na tentativa ${tentativas}!`);
    } else {
       
        alert (`A senha está errada, você está na tentativa Número: ${tentativas}. Te restam apenas mais ${limites}`);
        if (tentativas > 3)
        alert ("Você não tem mais nenhuma tentativa");
    } 
} 