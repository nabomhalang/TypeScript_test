import TPiece from "./TPiece";
let T_Piece = new TPiece();
T_Piece.build();

const canvas: HTMLCanvasElement = document.querySelector("#tetris");
const ctx = canvas!.getContext("2d");

ctx?.scale(20, 20);

function draw() {
  ctx?.fillStyle = "#000";
  ctx?.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(T_Piece.matrix, player.pos);
}

function drawMatrix(matrix, offset): void {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx?.fillStyle = "red";
        ctx?.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;

  if (dropCounter > dropInterval) {
    player.pos.y += 1;
    dropCounter = 0;
  }

  draw();
  requestAnimationFrame(update);
}

const player = {
  pos: { x: 0, y: 0 },
  matrix: T_Piece.matrix
};

document.addEventListener("keydown", function (event) {
  if (checkkey.Left(event.keyCode)) {
    player.pos.x -= 1;
  } else if (checkkey.Right(event.keyCode)) {
    player.pos.x += 1;
  } else if (checkkey.Up(event.keyCode)) {
    T_Piece.rotate();
    console.log({ T_Piece: T_Piece.matrix, matrix: player.matrix });
  } else if (checkkey.Down(event.keyCode)) {
    player.pos.y += 1;
    dropCounter = 0;
  }
});

const checkkey = {
  Left: (keyCode) => keyCode === 37,
  Right: (keyCode) => keyCode === 39,
  Up: (keyCode) => keyCode === 38,
  Down: (keyCode) => keyCode === 40
};

update();
