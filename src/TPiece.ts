import Piece from "./Piece";
import { Direction } from "./Piece";

export default class TPiece extends Piece {
  build() {
    let rand = Math.random() * 100;
    if (rand < 25) {
      this.up();
    } else if (rand < 50) {
      this.down();
    } else if (rand < 75) {
      this.left();
    } else {
      this.right();
    }

    return this.matrix;
  }

  rotate() {
    console.log(this.direction);
    switch (this.direction) {
      case Direction.UP:
        this.right();
        return;
      case Direction.DOWN:
        this.left();
        return;
      case Direction.LEFT:
        this.up();
        return;
      case Direction.RIGHT:
        this.down();
        return;
    }
  }

  up() {
    this.matrix = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ];
    this.direction = Direction.UP;
  }

  down() {
    this.matrix = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ];
    this.direction = Direction.DOWN;
  }

  left() {
    this.matrix = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ];
    this.direction = Direction.LEFT;
  }

  right() {
    this.matrix = [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
    ];
    this.direction = Direction.RIGHT;
  }
}
