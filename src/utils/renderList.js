const renderObj = {
  select: ({ h, item, prop }) => {
    return h(
      `el-option`, {
      attrs: {
        label: item[prop.label],
        value: item[prop.value],
      },
    }
    )
  },
  button: ({ h, text }) => {
    return h(
      'span',
      {
        domProps: {
          innerText: text
        }
      }
    )
  },
}

export default renderObj