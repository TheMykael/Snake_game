let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
	x: 8 * box,
	y: 8 * box
}
let direction = "right";

function criarBG(){
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
	for(i=0; i < snake.length; i++){
		context.fillStyle = "purple";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}

function iniciarJogo(){
	criarBG();
	criarCobrinha();
	// Posição x e y da cobrinha, para ela ter um ponto de partida
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	// Coordenadas da cobrinha, onde ela irá seguir
	if(direction == "right") snakeX += box;
	if(direction == "left") snakeX -= box;
	if(direction == "up") snakeY += box;
	if(direction == "down") snakeY -= box;
	// Função "pop" para retirar o último elemento do nosso array
	snake.pop();
	// É necessário criar a cabeça da cobrinha com o "unshift" que irá acrescentar à frente do elemento
	let newHead = {
		x: snakeX,
		y: snakeY
	}
	snake.unshift(newHead);
}

// Isso serve para atualizar o jogo. O padrão sugerido foi de 100ms
let jogo = setInterval(iniciarJogo, 100);