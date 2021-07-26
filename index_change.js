if (performance.navigation.type == 1) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //Pega as tags de imagem e as coloca em uma array:
    var image = document.getElementsByTagName("img");
    var header = document.querySelector('h1');

    //Função para mudar a imagem dos dados:
    function changeDiceImage(dice, i){
        dice = 'dices/dice-' + dice + '.png'
        image[i].setAttribute('src', dice);
    }

    changeDiceImage(dice1, 0);
    changeDiceImage(dice2, 1);
    
    
    if (dice1 > dice2){
        header.innerHTML = 'Player 1 won! 🎉';
    }
    else if (dice2 > dice1){
        header.innerHTML = 'Player 2 won! 🥳';
    }
    else{
        header.innerHTML = "It's a Tie! 😯";
    }
    // console.log(dice1);
    // console.log(dice2);
}
