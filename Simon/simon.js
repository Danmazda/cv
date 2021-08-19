//JS
let gamePattern = [];
let playerPattern = [];
let listOfBlocks = ['b1', 'b2', 'b3', 'b4'];
let level = 0;
let started = false;
let sucess = true;
let allTheBlocks = document.querySelectorAll('.block');

function logMe(){
    console.log('Jogador: ' + playerPattern);
    console.log('Pc:      ' + gamePattern);
}

function playSound(obj){
    let som = new Audio('sounds/' + obj +'.mp3');
    som.play();
}

function addPress(cssClass){
    $('.' + cssClass).addClass('pressed');
    setTimeout(function(){$('.' + cssClass).removeClass('pressed');}, 250);
}

function wrong(){
    playSound('wrong');
    $('h1').text('Game Over!');
    $('h2').text('Press any key to start again.');
    $('h2').show();
    $('body').addClass('wrong');
    setTimeout(function(){$('body').removeClass('wrong');}, 500);
    startOver();
}

function checkAnswer(){
    if (gamePattern.length === playerPattern.length){
        console.log('Entered verification');
        for(let i = 0; i < gamePattern.length; i++){
            if (playerPattern[i] == gamePattern[i]){
                console.log('Pass at ind ' + i);
            }
            else{
                console.log('WRONG CLEARING LIST');
                logMe();
                wrong();
                return;
            }
        }
        console.log('Success!');
        logMe();
        // playerPattern = [];
        setTimeout(function (){nextSequence();}, 1000);
        }  
    else{
        console.log('Not all numbers in the list');
    }}
    

function startOver(){
    playerPattern = [];
    gamePattern = [];
    started = false;
    level = 0;
}

function nextSequence(){
    playerPattern =[];
    level ++;
    $('h1').text('Level ' + (level));
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenBlock = listOfBlocks[randomNumber];
    gamePattern.push(randomChosenBlock);
    addPress(randomChosenBlock);
    playSound(randomChosenBlock);
}

for (let ind = 0; ind < allTheBlocks.length; ind ++){
    allTheBlocks[ind].addEventListener('click',
    function (){
            let bloco = this;
            let b = $(bloco).attr('class').slice(6,8);
            addPress(b);    
            console.log('PUSH');
            playerPattern.push(b);
            playSound(b);
            checkAnswer();
        }
    );}


$(document).keypress(function () {
    if (!started){
        $('h2').hide();
        nextSequence();
        started = true;
        sucess = true;
    }});
