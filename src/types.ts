export type PlayerID = string;

export interface IPlayer {
  name: string;
  id: PlayerID;
  typed: string;
  is: boolean;
}
export interface ICompetitor extends IPlayer {
  similarity: number;
}

export interface IStatePlayer {
  [id: string]: IPlayer;
}

// VueX
export interface IRootState {
  room: string;
  quote: string;
  id: PlayerID;
  players: IStatePlayer;
}
