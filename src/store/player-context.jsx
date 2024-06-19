import { createContext } from "react";

const PlayerContext = createContext({
  players: [],
  updateX: () => {},
  updateO: () => {},
});

export { PlayerContext };
