import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree, ActionTree, GetterTree } from 'vuex';
import uuid from 'uuid/v1';

import { saveLocalStoragePlayer } from '@/utils';
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
  playerAdd({ commit, state }, { name, id }: IPlayer): any {
    // Create player object to store locally
    const player = {
      name,
      id: id ? id : uuid(), // Create or update
      typed: '', // Haven't typed anything yet
      is: true, // This player is us in browser
    };
    // Store local
    saveLocalStoragePlayer(state.room, player);
    // Add directly for now
    commit('PLAYER_ADD', player);
  },
};

export const getters: GetterTree<IRootState, any> = {
  player(state) {
    return state.players[state.id];
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
