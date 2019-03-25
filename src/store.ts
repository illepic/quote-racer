import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree, ActionTree, GetterTree } from 'vuex';
import uuid from 'uuid/v1';

import { saveLocalStoragePlayer, readLocalStoragePlayer } from '@/utils';
import { IPlayer, IRootState } from '@/types';

Vue.use(Vuex);

export const appState: IRootState = {
  room: '',
  quote: 'This is a long quote from a VueX store.',
  id: '',
  players: {},
};

export const mutations: MutationTree<IRootState> = {
  ROOM_SET(state, room) {
    state.room = room;
  },
  PLAYER_ADD(state, player: IPlayer) {
    state.id = player.id;
    state.players[state.id] = player;
  },
  PLAYER_NAME(state, name: string) {
    state.players[state.id].name = name;
  },
  PLAYER_TYPED(state, text: string) {
    state.players[state.id].typed = text;
  },
};

export const actions: ActionTree<IRootState, any> = {
  playerAdd({ commit, state }, player?: IPlayer): any {
    // @ TODO: cleanup
    if (player) {
      // Create player object to store locally, clean this up
      const newPlayer = {
        name: player && player.name ? player.name : '',
        id: player && player.id ? player.id : uuid(), // Create or update
        typed: '', // Haven't typed anything yet
        is: true, // This player is us in browser
      };
      // Store local
      saveLocalStoragePlayer(state.room, newPlayer);
      // Add directly for now
      commit('PLAYER_ADD', newPlayer);
    } else {
      // Add saved player
      const retrievedPlayer = readLocalStoragePlayer(state.room);
      if (retrievedPlayer) {
        commit('PLAYER_ADD', retrievedPlayer);
      }
    }
  },
};

export const getters: GetterTree<IRootState, any> = {
  player(state) {
    return state.id && state.players[state.id];
  },
  playerTyped(state, { player }) {
    return player && player.typed;
  },
};

const store: StoreOptions<IRootState> = {
  state: appState, // When refactoring this, rename to just `state`
  mutations,
  actions,
  getters,
};

export default new Vuex.Store<IRootState>(store);
