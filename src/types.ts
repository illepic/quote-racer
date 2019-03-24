export interface IPlayer {
  name: string;
  id: string;
  typed: string;
}

// VueX
export interface IRootState {
  room: string;
  quote: string;
  player: IPlayer;
  players: IPlayer[];
}
