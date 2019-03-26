<template>
  <div v-html="identicon" class="avatar"></div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import jdenticon from 'typestub-jdenticon';

@Component
export default class Avatar extends Vue {
  @Prop() public seed!: string;
  @Prop({ default: 100 }) public size!: number;

  get identicon() {
    return jdenticon.toSvg(this.seed, this.size);
  }
}
</script>
