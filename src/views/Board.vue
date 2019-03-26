<template>
  <div class="board flex h-screen">
    <div
      class="left flex flex-col items-center justify-center w-1/3 h-screen bg-purple-darkest p-6"
    >
      <Logo />
      <Quote />
    </div>
    <div
      class="right w-2/3 h-screen overflow-y-scroll bg-purple-dark flex flex-col items-center justify-center"
    >
      <div class="flex flex-col items-center justify-center w-full">
        <Player />
        <Competitors />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Logo from '@/components/Logo.vue';
import Quote from '@/components/Quote.vue';
import Player from '@/components/Player.vue';
import Competitors from '@/components/Competitors.vue';

@Component({
  components: {
    Logo,
    Quote,
    Player,
    Competitors,
  },
})
export default class Board extends Vue {}
</script>
