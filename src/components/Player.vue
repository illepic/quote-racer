<template>
  <div class="player w-full">
    <p>avatar</p>
    <h2>{{ player.name }}</h2>
    <h3>{{ room }}</h3>
    <form @submit.prevent="formPlayerAdd">
      <label for="player-name">Player name:</label>
      <input v-model="name" name="player-name" id="player-name" type="text" />
    </form>
    <form>
      <label for="player-typed">Player typed:</label>
      <input name="player-typed" id="player-typed" type="text" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Getter, State, Mutation } from 'vuex-class';

import { IPlayer } from '@/types';

@Component
export default class Player extends Vue {
  @State('room') public room!: string;
  @Mutation('PLAYER_NAME') public PLAYER_NAME!: any;
  @Action('playerAdd') public playerAdd!: any;
  @Getter('player') public player!: IPlayer;

  get name() {
    return this.player.name;
  }
  set name(name) {
    this.PLAYER_NAME(name);
  }

  public mounted() {
    // Add player from localstorage, or create new
    this.playerAdd();
  }

  public formPlayerAdd() {
    // console.log(this.player);
    this.playerAdd(this.player);
  }
}
</script>
