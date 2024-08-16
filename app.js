import Game, {
  GameSavingData,
  loadGame as readGameSaving,
  writeGameSaving as saveGame,
} from "./game";

const game = new Game();
game.start();
