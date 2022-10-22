<script>
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
    const returnOption = (item, prop) => {
      return h('el-option', {
        attrs: {
          label: item[prop.label],
          value: item[prop.value],
        },
      })
    }

    // console.log(h)
    const data = this.data
    const prop = this.prop
    if (data.componentName == 'select') {
      return h(
        `el-${data.componentName}`,
        {
          attrs: {
            placeholder: data.placeholder,
            value: data.value,
          },
          on: {
            change: this.changeHandler,
          },
        },
        data.options.map(item => {
          return returnOption(item, prop)
        })
      )
    } else {
      return h(`el-select`, {
        attrs: {
          placeholder: data.placeholder,
          value: data.value,
        },
      })
    }
  },
  methods: {
    changeHandler(e) {
      console.log(this, 'this')
      console.log(e, 'e')
      console.log(this.data)
      this.data.value = e
      // this.data.
    },
  },
}
</script>

<style scoped></style>
