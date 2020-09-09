<template>
  <div class="rz-relationInput">
    <el-dropdown trigger="click" @command="change">
      <el-input v-model="value" @input="input" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="item" v-for="item in list" :key="item.value" v-text="item.label" />
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => ([])
      },
      inputModel: {
        default: ''
      },
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      input(val) {
        this.$emit('update:inputModel', val);
      },
      change(data) {
        this.value = data.label;
        this.$emit('update:inputModel', this.value);
        this.$emit('change', data);
      }
    },
    mounted() {
      this.value = this.inputModel;
    }
  }
</script>
<style lang='scss' scoped>
</style>