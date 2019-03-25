<template>
  <div class="competitor p-6 bg-purple-light">
    <Avatar :seed="player.id" />
    <h2 class="competitor__name">{{ player.name }}</h2>
    <div class="competitor__typed text-3xl">{{ player.typed }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import Avatar from '@/components/Avatar.vue';

import { IPlayer } from '@/types';

@Component({
  components: {
    Avatar,
  },
})
export default class Competitor extends Vue {
  @Prop() public player!: IPlayer;
}
</script>
