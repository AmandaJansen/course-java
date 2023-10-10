const colors = ['Yellow', 'Green', 'Orange', 'Purple', 'Red', 'Blue', 'Magenta',  'Cyan', 'White', 'Black']
const btn = document.getElementById('btn');
const nameColor = document.querySelector('.color');

//Evento de click do botão
function clickButton(){
  const randomColor = getRandomColor();
  document.body.style.background = colors[randomColor]; //Muda cor do background
  nameColor.textContent = colors[randomColor]; // Insere o nome da cor 
}
//Gerar números através do Random
function getRandomColor(){
  return Math.floor(Math.random() * colors.length);
}

