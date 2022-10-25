import Vue from 'vue'
import element from 'element-ui'
const elementArr = [
  'Button',
  'Select',
  'Option',
  'RadioGroup',
  'RadioButton',
  'Table',
  'TableColumn',
  'DatePicker']

elementArr.forEach(item => {
  Vue.use(element[item])
})