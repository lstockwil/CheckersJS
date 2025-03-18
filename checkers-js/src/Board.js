// class Board
import Piece from './Piece.js'
import Square from './Square.js';

export default class Board {
  constructor(size=8) {
    this.arr = Array.from({ length: size }, () => Array().fill(null));


    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i % 2 + j % 2 == 0) {
          this.arr[i][j] = new Piece("red", null);
          continue;
        }
        this.arr[i][j] = new Piece("black", null);
      } 
    }

    this.size = size;
  }

  toString() {
    return 'Hello!';
  }

}
