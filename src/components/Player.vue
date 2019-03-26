<template>
  <div class="player w-full p-6 bg-purple-light text-center">
    <Avatar :seed="player.id" />
    <h2
      class="text-lg font-bold"
      v-if="!editName"
      @click="editName = !editName"
    >
      {{ player.name }}
    </h2>
    <form @submit.prevent="formPlayerAdd" v-if="editName">
      <label for="player-name" class="hidden">Player name:</label>
      <input
        id="player-name"
        name="player-name"
        type="text"
        class="text-lg font-bold text-center"
        v-model="name"
      />
    </form>

    <form @submit.prevent="" autocomplete="off">
      <div class="flex flex-col mt-4">
        <label for="player-typed" class="hidden">Player typed:</label>
        <input
          id="player-typed"
          name="player-typed"
          type="text"
          placeholder="Type quote here"
          class="border border-purple-dark text-3xl p-2"
          v-model="typed"
        />
      </div>
    </form>
    <!--    <p>{{ playerTyped }}</p>-->
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

  public editName = false;

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
    this.editName = !this.editName;
    // User can change name
    this.playerAdd(this.player);
  }
}
</script>
