<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <slot />
    <div style="margin-top: 20px;">
      <el-collapse v-if="this.$scopedSlots.document">
        <el-collapse-item title="查看代码">
          <slot name="document" />
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["title"]
  };
</script>