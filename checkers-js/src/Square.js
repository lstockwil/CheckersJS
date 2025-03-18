// class Square
import Piece from './Piece.js'
export default class Square {
  constructor(color="black", piece=null) {
    this.color = color;
    this.piece = piece;
  }
}
