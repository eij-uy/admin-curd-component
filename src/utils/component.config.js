import Vue from 'vue'
import element from 'element-ui'
const elementArr = ['Button', 'Select', 'Option']

elementArr.forEach(item => {
  Vue.use(element[item])
})