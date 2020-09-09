<script>
  export default {
    render: function (createElement) {
      return createElement(
        'div', {},
        [createElement(
          'h' + this.level, // 标签名称
          {
            domProps: {
              innerText: this.text
            }
          }
        ), this.$slots.default] // 子节点数组
      )
    },
    props: {
      level: {
        required: true
      },
      text: {}
    }
  }
</script>