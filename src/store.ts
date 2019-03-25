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
    // We are ADDING a new property to state.players: id. MUST be Vue.set()'d
    Vue.set(state.players, player.id, player);
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
    const retrievedPlayer = readLocalStoragePlayer(state.room);

    // 1. Brand new player, no localstorage
    if (!player && !retrievedPlayer) {
      commit('PLAYER_ADD', {
        name: '',
        id: uuid(), // Generate unique ID for brand new player
        typed: '',
        is: true,
      });
    }

    // 2. Returning player from localstorage
    if (!player && retrievedPlayer) {
      commit('PLAYER_ADD', retrievedPlayer);
    }

    // 3. Modifying name of existing player
    if (player) {
      // Store local
      saveLocalStoragePlayer(state.room, player);
      commit('PLAYER_ADD', player);
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
