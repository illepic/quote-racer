<template>
  <div class="competitor flex flex-col p-6 text-purple-darkest">
    <Avatar :seed="player.id" />
    <h2 class="competitor__name">{{ player.name }}</h2>
    <div class="competitor__typed text-3xl">{{ player.typed }}</div>
    <p>Similarity: {{ player.similarity }}</p>
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
}
</script>
