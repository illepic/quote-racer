<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ isOdd }}</p>
    <p>{{ count }}</p>
    <p>{{ stateQuote }}</p>
    <button @click="increment">Increment</button>

    <form @submit.prevent="formPlayerAdd">
      <input type="text" v-model="name" placeholder="Your name" />
      <button type="submit">Add Player</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Action, State, Mutation } from 'vuex-class';

import {IPlayer} from '@/types';

@Component
export default class HelloWorld extends Vue {
  @State('quote') public stateQuote!: string;
  @State('player') public player!: IPlayer;
  @Mutation('PLAYER_NAME') public PLAYER_NAME!: any;
  @Action('playerAdd') public playerAdd!: any;

  @Prop() public msg!: string;

  public count = 0;

  public increment() {
    this.count++;
  }

  public formPlayerAdd() {
    this.playerAdd({
      name: this.name,
      // id will be empty first submit, updates existing player later
      id: this.player.id,
    });
  }

  get isOdd() {
    return this.count % 2 ? 'even' : 'odd';
  }

  // From getter/setter for VueX forms
  get name() {
    return this.player.name;
  }
  set name(name) {
    this.PLAYER_NAME(name);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
