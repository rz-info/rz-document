<template>
  <div class="rz-financeInput">

    <el-input v-model="inputVal" @focus="focusKey = true" @blur="focusKey = false" @change="change" :disabled="readonly"
      :placeholder="placeholder" />

    <div class="symbol">{{symbol}}</div>

  </div>
</template>
<script>
  export default {
    props: {
      inputModel: {
        type: String || Number,
        default: ''
      },
      decimal: { // 保留几位小数
        // type: Number || String,
        default: 2
      },
      symbol: {
        default: '￥'
      },
      placeholder: {
        default: "请输入"
      },
      readonly: {
        default: false
      }
    },
    watch: {
      inputModel: {
        handler(now) {
          if (this.inputModel) this.$emit('update:inputModel', this.fullString(this.inputModel, this.decimal));
          this.showText = this.formatAmount(this.inputModel);
          if(this.showText==0){
            this.showText = "";
          }
          this.inputVal = this.showText;
        },
        immediate: true
      },
      focusKey: {
        handler(now) {
          this.inputVal = now ? this.inputModel : this.showText;
        },
        immediate: true
      }
    },
    data() {
      return {
        focusKey: false,
        inputVal: '',
        showText: '',
      }
    },
    methods: {
      toThousands(num) {
        var num = (num || 0).toString(),
          result = '';
        // 将传入数据转换为字符串
        while (num.length > 3) {
          // 只要字符串长度大于三就执行
          result = ',' + num.slice(-3) + result;
          // 将字符串后三位裁剪并加入最终的字符串 
          num = num.slice(0, num.length - 3);
          // 更新字符串长度
        }
        if (num) {
          result = num + result;
        }
        return result;
      },
      fullString(str, num = 2) {
        str = String(str);
        num = Number(num);
        let zs = str.split('.')[0];
        let xs = str.split('.')[1] || '';

        if (xs.length < num) {
          while (xs.length < num) {
            xs += '0';
          }
        } else {
          xs = xs.slice(0, num)
        }
        return zs + '.' + xs;
      },
      formatAmount(val) {
        val = String(val)
        let zs = val.split('.')[0];
        let xs = val.split('.')[1];

        zs = this.toThousands(zs);

        return xs ? zs + '.' + xs : zs;
      },
      change(val) {
        this.$emit('update:inputModel', val ? this.fullString(val, this.decimal) : '');
      }
    },
  }

</script>
<style lang='scss' scoped>
  .rz-financeInput {
    position: relative;

    .symbol {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translate3d(-50%, -50%, 0);
    }

  }

</style>

<style scoped>
  .rz-financeInput>>>.el-input input {
    padding-left: 30px;
  }

</style>
