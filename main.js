const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');
const hex = document.querySelector('.hex');

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
	let hexCol = '#';
	for(let i=0;i<6;i++){
   let random = Math.floor(Math.random()*hexNumbers.length);
   		hexCol += hexNumbers[random];

   }
   bodyBg.style.backgroundColor = hexCol;
   hex.innerHTML = hexCol;
	
	}
  
	
