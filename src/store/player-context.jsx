import { createContext } from "react";

const PlayerContext = createContext({
  players: [],
  scores: [],
  updateX: () => {},
  updateO: () => {},
  updateScore: () => {},
  onClose: () => {},
});

export { PlayerContext };
