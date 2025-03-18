import logo from './logo.svg';
import './App.css';
import Board from './Board.js';

function App() {
  const game_board = new Board(8);
  console.log(game_board);
  
  return (
    <div className="App">
      <header className="App-header">
          Checkers
      </header>
    </div>
  );
}

export default App;
