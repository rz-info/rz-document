<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <h2>示例</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>
<style lang="scss" scoped></style>
