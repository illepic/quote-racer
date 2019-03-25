<template>
  <div class="competitors w-full">
    <Competitor
      v-for="competitor in competitors"
      :key="competitor.id"
      :player="competitor"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Getter, State, Mutation } from 'vuex-class';

import Competitor from '@/components/Competitor.vue';
import { IPlayer } from '@/types';

@Component({
  components: {
    Competitor,
  },
})
export default class Competitors extends Vue {
  @Getter('competitors') public competitors!: IPlayer[];
}
</script>
