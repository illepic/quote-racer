<template>
  <h3 class="quote text-purple">{{ quote }}</h3>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

@Component
export default class Quote extends Vue {
  @State('quote') public quote!: string;
}
</script>
