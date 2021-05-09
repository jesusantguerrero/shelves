<template>
  <div class="w-full p-5 md:px-10">
    <div class="w-full mb-10">
      <section-header :title="mainTitle" :linkRoute="{name: 'feed'}" linkLabel="Refresh" class="mb-2"/>
      <slot name="topBooks"></slot>
    </div>

    <div class="flex w-full">
      <div class="w-6/12 pr-5">
        <section-header :title="leftTitle" :linkRoute="{name: 'feed'}" linkLabel="More" class="mb-2"/>
        <slot name="byCategory"></slot>
      </div>
      <div class="w-6/12 pl-5">
        <section-header :title="rightTitle" :linkRoute="{name: 'feed'}" linkLabel="More" class="mb-2"/>
        <slot name="myReads"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../molecules/SectionHeader.vue";

export default {
  props: {
    mainTitle: String,
    leftTitle: String,
    rightTitle: String
  },
  components: {
    SectionHeader
  }

}
</script>

<style>

</style>
