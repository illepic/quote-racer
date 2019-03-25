<template>
  <div class="player w-full p-6 bg-purple-light">
    <Avatar :seed="player.id" />
    <h2>{{ player.name }}</h2>

    <form @submit.prevent="formPlayerAdd">
      <label for="player-name" class="hidden">Player name:</label>
      <input v-model="name" name="player-name" id="player-name" type="text" />
    </form>

    <form @submit.prevent="">
      <label for="player-typed" class="hidden">Player typed:</label>
      <input
        v-model="typed"
        name="player-typed"
        id="player-typed"
        type="text"
        class="border border-purple-dark text-4xl"
      />
    </form>
    <p>{{ playerTyped }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Getter, State, Mutation } from 'vuex-class';

import { IPlayer } from '@/types';

import Avatar from '@/components/Avatar.vue';

@Component({
  components: {
    Avatar,
  },
})
export default class Player extends Vue {
  @Mutation('PLAYER_NAME') public PLAYER_NAME!: any;
  @Mutation('PLAYER_TYPED') public PLAYER_TYPED!: any;

  @Action('playerAdd') public playerAdd!: any;

  @Getter('player') public player!: IPlayer;
  @Getter('playerTyped') public playerTyped!: string;

  // Player name getter/setter
  get name() {
    return this.player.name;
  }
  set name(name) {
    this.PLAYER_NAME(name);
  }
  // Player typed getter/setter
  get typed() {
    return this.playerTyped;
  }
  set typed(text) {
    this.PLAYER_TYPED(text);
  }

  public mounted() {
    // Add player from localstorage, or create new
    this.playerAdd();
  }

  public formPlayerAdd() {
    // User can change name
    this.playerAdd(this.player);
  }
}
</script>
