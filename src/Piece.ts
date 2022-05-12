export enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  UP = "UP",
  DOWN = "DOWN"
}

export default class Piece {
  constructor() {}

  public direction: Direction;

  public _matrix: [number[], number[], number[]];
  get matrix() {
    return this._matrix;
  }

  set matrix(newMatrix) {
    this._matrix = newMatrix;
  }
  public createMatrix() {}
}
