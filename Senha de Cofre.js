 var senhaDoCofre = 18795;
 var senhaDigitada;
 var limites = 3;

 while (limites >=0){
senhaDigitada = prompt("Insira a senha para acesso ao cofre");

    if (senhaDigitada == senhaDoCofre) {
     alert(`Senha correta, abrindo cofre`);
        break;
    } else if(senhaDigitada != senhaDoCofre) {
    alert(`Senha incorreta, tente novamente, restam ${limites} tentativas`);
    } limites--;
    }tentativas++;