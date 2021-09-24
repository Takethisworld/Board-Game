const board =document.querySelector('#board');
const colors = ['blue','yellow','green','pink','purple','red;']
const squaresNumber = 500;

for(let i = 0; i < squaresNumber; i++){
    const square=document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',()=>{
        setColor(square);
    })

    square.addEventListener('mouseleave',()=>{
        removeColor(square);
    })
    board.append(square);
}

function setColor(element){
    const color = randomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`

}

function randomColor(){
   const index= Math.floor(Math.random() * colors.length);
   return colors[index];
}