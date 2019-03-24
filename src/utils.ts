/**
 * Utils
 */

import { IPlayer } from '@/types';
import { LOCAL_STORAGE} from '@/config';

export interface IRoomLocal {
  [room: string]: IPlayer;
}

export const readLocalStoragePlayer = (room: string): IRoomLocal | boolean => {
  // Pull player name for this room from localstorage
  const history = JSON.parse(localStorage.getItem(LOCAL_STORAGE) || '');
  // Restore player name for this room
  return history && history[room] && history[room];
};

export const saveLocalStoragePlayer = (room: string, player: IPlayer) => {
  // Retrieve localstorage
  const history = JSON.parse(localStorage.getItem(LOCAL_STORAGE) || '') || {};
  // Update player name for this room
  history[room] = player;
  // Set player name for this room in localstorage
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(history));
};
