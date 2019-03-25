<template>
  <div class="player w-full">
    <p>avatar</p>
    <h2>player</h2>
    <form>
      <label for="player-name">Player name:</label>
      <input name="player-name" id="player-name" type="text"/>
    </form>
    <form>
      <label for="player-typed">Player typed:</label>
      <input name="player-type" id="player-typed" type="text"/>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Player extends Vue {

  public mounted() {
    // console.log('hello');
  }
}
</script>
