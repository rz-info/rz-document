<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <template v-for="(item,index) in this.$scopedSlots">
      <h2 :key="index">示例{{index}}</h2>
      <slot :name="index"></slot>
    </template>
  </div>
</template>
<script>
  export default {
    props: ["title"]
  };
</script>
<style lang="scss" scoped></style>