const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const coordDisplay = document.getElementById('coordinates');

const player = {
    x: 50,
    y: 50,
    width: 30,
    height: 30,
    speed: 5
};

const keys = {};

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    drawPlayer();
    updateCoordinates();
    requestAnimationFrame(gameLoop);
}

function updatePlayer() {
    if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
    if (keys.ArrowRight && player.x < canvas.width - player.width) player.x += player.speed;
    if (keys.ArrowUp && player.y > 0) player.y -= player.speed;
    if (keys.ArrowDown && player.y < canvas.height - player.height) player.y += player.speed;
}

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updateCoordinates() {
    coordDisplay.textContent = `X: ${Math.round(player.x)}, Y: ${Math.round(player.y)}`;
}

document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

gameLoop();