<template>
  <div v-html="identicon"></div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import jdenticon from 'typestub-jdenticon';

@Component
export default class Avatar extends Vue {
  @Prop() public seed!: string;

  get identicon() {
    return jdenticon.toSvg(this.seed, 100);
  }
}
</script>
