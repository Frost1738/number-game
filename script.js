'use strict';
/*document.querySelector('.message').textContent
document.querySelector('.message').textContent='correct Number🍾'
document.querySelector('.number').textContent=13
document.querySelector('.score').textContent=10*/

let score=20;
let secretNumber=Math.trunc(Math.random()*20)+1;
let highScore=0;

const displayMessage = function(message){
	document.querySelector('.message').textContent=message
}

document.querySelector('.check').addEventListener('click',function(){
	const guess =Number(document.querySelector('.guess').value);
	console.log(typeof guess);
	//when there is no guess
	if (!guess){
		displayMessage('⛔ NO number')
	}
	//if you win
	else if(guess===secretNumber){
		displayMessage('correct Number🍾')
		document.querySelector('.number').textContent=secretNumber;

		document.querySelector('body').style.backgroundColor='#60b347'
		document.querySelector('.number').style.width='30rem'
		if (score > highScore){
			highScore=score;
			document.querySelector('.highscore').textContent=highScore;
		}
	}
		//when guess is wrong
	else if (guess !== secretNumber){
	
			//if you still have chances
		if (score > 0){
		displayMessage(`${guess > secretNumber ?'Too high☝️':'too low 👇'}`)
		score--;
		document.querySelector('.score').textContent=score;}
		//if you lose
		else{displayMessage('you lost the game💥')
			document.querySelector('.score').textContent=0;
	}}
		//if you are too high
		/*else if(guess > secretNumber){
			//if you still have chances
		if (score > 0){
		document.querySelector('.message').textContent='Too high☝️'
		score--;
		document.querySelector('.score').textContent=score;}
		//if you lose
		else{document.querySelector('.message').textContent='you lost the game💥'
			document.querySelector('.score').textContent=0;
		}
	}
			//if you are too low
	else if(guess < secretNumber){
		//if you still have chances
		if (score > 0){
		document.querySelector('.message').textContent='Too low👇' 
		score--;
		document.querySelector('.score').textContent = score;}

		//if you lose
		else{document.querySelector('.message').textcontent='you lost the game💥'
			document.querySelector('.score').textContent=0;
		}

		
	}*/
})
document.querySelector('.again').addEventListener('click',function(){
	score=20;
	secretNumber=document.querySelector('.number').textContent=secretNumber;
	displayMessage('start guessing...')
	document.querySelector('.score').textContent=score;
	document.querySelector('.number').textContent='?';
	document.querySelector('.guess').value='';
	document.querySelector('body').style.backgroundColor='#222';
		document.querySelector('.number').style.width='15 rem'

})


