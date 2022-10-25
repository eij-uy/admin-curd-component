<script>
import renderObj from '@/utils/renderList'
export default {
  data() {
    return {}
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
    prop: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  render(h) {
    const returnOption = (data, item, prop, h) => {
      if (renderObj[data.componentName]) {
        return renderObj[data.componentName]({
          h,
          item,
          prop,
          text: item.value,
        })
      }
      console.error('暂不支持此标签')
    }

    const returnOnFun = tag => {
      if (tag == 'button') {
        return {
          click: this.clickHandler,
        }
      } else {
        return {
          input: this.changeHandler,
        }
      }
    }

    // console.log(h)
    const data = this.data
    const prop = this.prop
    // console.log(data)
    // if (data.componentName == 'select') {
    return h(
      `el-${data.componentName}`,
      {
        attrs: {
          placeholder: data.placeholder,
          value: data.value,
          ...data.attrs,
        },
        // on: {
        //   input: this.changeHandler,
        // },
        on: returnOnFun(data.componentName),
      },
      data.options
        ? data.options.map(item => {
            return returnOption(data, item, prop, h)
          })
        : ''
    )
    // } else {
    //   return h(`el-select`, {
    //     attrs: {
    //       placeholder: data.placeholder,
    //       value: data.value,
    //     },
    //   })
    // }
  },
  methods: {
    changeHandler(e) {
      this.data.value = e
      // this.data.
    },
    clickHandler() {
      console.log(this, 'this')
    },
  },
}
</script>

<style scoped></style>
