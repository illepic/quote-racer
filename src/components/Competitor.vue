<template>
  <div class="competitor flex p-6 text-purple-darkest relative">
    <div
      class="progress absolute pin-t pin-l border border-blue"
      :style="{ width: `${player.similarity * 100}%` }"
    ></div>
    <div class="w-1/4 text-center relative">
      <Avatar :seed="player.id" size="75" />
      <h2 class="competitor__name text-base">{{ player.name }}</h2>
      <div
        v-if="player.is"
        class="you bg-green text-white text-xs font-bold uppercase py-1 px-2 rounded-sm absolute pin-r pin-t mr-4"
      >
        You
      </div>
    </div>
    <div class="w-3/4 flex flex-col justify-center">
      <p class="competitor__typed text-xl">{{ player.typed }}</p>
      <p>Similarity: {{ player.similarity }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
// import { Action, Getter, State, Mutation } from 'vuex-class';

import Avatar from '@/components/Avatar.vue';

import { ICompetitor } from '@/types';

@Component({
  components: {
    Avatar,
  },
})
export default class Competitor extends Vue {
  @Prop() public player!: ICompetitor;

  get progress() {
    return 0.75 * 100;
  }
}
</script>
