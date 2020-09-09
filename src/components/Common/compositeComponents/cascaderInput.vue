<template>
  <div class="rz-cascaderInput" @click="$event.stopPropagation()">
    <el-input v-model="value" @focus="focus" @input="input" />
    <div style="position: relative;z-index:1" v-show="showCascaderPanel">
      <el-cascader-panel v-model="checkedList" style="background:#fff;position: absolute" @change="change"
        :options="list" :props="config">
      </el-cascader-panel>
    </div>
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
      defaultChecked: {
        type: Array,
        default: () => ([])
      },
      config: {
        default: () => ({
          checkStrictly: true,
          expandTrigger: 'hover',
          multiple: false
        })
      }
    },
    data() {
      return {
        showCascaderPanel: false,
        value: '',
        checkedList: []
      }
    },
    methods: {
      init() {
        this.value = this.inputModel;
        this.checkedList = this.defaultChecked;
      },
      focus() {
        this.showCascaderPanel = true;
      },
      change(e) {
        this.value = e[e.length - 1];
        this.$emit('update:inputModel', this.value);
        this.$emit('change', e, this.value);
      },
      input(val) {
        this.$emit('update:inputModel', val);
      },
      hideCascaderPanel() {
        this.showCascaderPanel = false;
      }
    },
    mounted() {
      this.init();
      document.addEventListener("click", this.hideCascaderPanel);
    },
    beforeDestroy() {
      document.removeEventListener("click", this.hideCascaderPanel);
    }
  }
</script>
<style lang='scss' scoped>
</style>