// Variáveis
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
	x: 8 * box,
	y: 8 * box
}

// Setar os movimentos da cobrinha. Pode ser left, right, etc.
let direction = "right";
// Fazer a comida aparecer em lugares randômicos
let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}

// Estilo do background
function criarBG(){
	context.fillStyle = "#d9d9d9";
	context.fillRect(0, 0, 16 * box, 16 * box);
}

// Estilo da cobrinha
function criarCobrinha(){
	for(i=0; i < snake.length; i++){
		context.fillStyle = "#590059";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}

// Função para criar a comida
function drawFood(){
	context.fillStyle = "#0D0D0D";
	context.fillRect(food.x, food.y, box, box);
}

// Função para a cobrinha andar de acordo com as teclas que pressionarmos
document.addEventListener('keydown', update);
function update(event){
	// A direção que ela irá se movimentar NÃO poderá ser a oposta, senão a cobrinha teria 2 cabeças
	if(event.keyCode == 37 && direction != "right") direction = "left";
	if(event.keyCode == 38 && direction != "up") direction = "down";
	if(event.keyCode == 39 && direction != "left") direction = "right";
	if(event.keyCode == 40 && direction != "down") direction = "up";
}

function iniciarJogo(){
	// Permitir que a cobrinha ao chegar nos limites do canvas, saia do lado oposto
	if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
	if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
	if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
	if(snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;
	// Declaração para criar de fato o background, a cobrinha e a comida
	criarBG();
	criarCobrinha();
	drawFood();
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

// Isso serve para atualizar o jogo, irá definir a velocidade. O padrão sugerido foi de 100ms
let jogo = setInterval(iniciarJogo, 120);