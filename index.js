if (performance.navigation.type == 1) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //Pega as tags de imagem e as coloca em uma array:
    var image = document.getElementsByTagName("img");
    var header = document.querySelector('h1');

    //Função para mudar a imagem dos dados:
    function changeDiceImage(dice, i){
        if (dice == 2){
            image[i].setAttribute('src', 'dices/dice-2.png');
        }
        else if (dice == 3){
            image[i].setAttribute('src', 'dices/dice-3.png');
        }
        else if (dice == 4){
            image[i].setAttribute('src', 'dices/dice-4.png');
        }
        else if (dice == 5){
            image[i].setAttribute('src', 'dices/dice-5.png');
        }
        else if (dice == 6){
            image[i].setAttribute('src', 'dices/dice-6.png');
        }
    }

    changeDiceImage(dice1, 0);
    changeDiceImage(dice2, 1);
    
    
    if (dice1 > dice2){
        header.innerHTML = 'Player 1 won!';
    }
    else if (dice2 > dice1){
        header.innerHTML = 'Player 2 won!';
    }
    else{
        header.innerHTML = "It's a Tie!";
    }
}
