import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree, ActionTree, GetterTree } from 'vuex';
import uuid from 'uuid/v1';

import { saveLocalStoragePlayer} from '@/utils';
import {IPlayer, IRootState} from '@/types';

Vue.use(Vuex);

const appState: IRootState = {
  room: '',
  quote: 'This is a long quote from a VueX store.',
  player: {
    name: '',
    id: '',
    typed: '',
  },
  players: [],
};

const mutations: MutationTree<IRootState> = {
  ROOM_SET(state, room) {
    state.room = room;
  },
  PLAYER_ADD(state, player) {
    state.player = player;
  },
  PLAYER_NAME(state, name) {
    state.player.name = name;
  },
};

const actions: ActionTree<IRootState, any> = {
  playerAdd({ commit, state }, { name, id }: IPlayer): any {
    // Create player object to store locally
    const player = {
      name,
      id: id ? id : uuid(),
      typed: '',
    };
    // Store local
    saveLocalStoragePlayer(state.room, player);
    // Add directly for now
    commit('PLAYER_ADD', player);
  },
};

const getters: GetterTree<IRootState, any> = {
  playerTyped(state) {
    return state.player.typed;
  },
};

const store: StoreOptions<IRootState> = {
  state: appState, // When refactoring this, rename to just `state`
  mutations,
  actions,
  getters,
};

export default new Vuex.Store<IRootState>(store);
