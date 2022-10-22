<template>
  <div>
    <div :class="['header', { header_flex: flex }]">
      <div
        :class="['header_select', { header_flex: flex }]"
        v-for="(select, index) in selectList"
        :key="index"
      >
        <div class="header_select_label" :style="flex ? '' : 'padding: 10px 0'">
          {{ select.label }}
        </div>
        <!-- 使用render函数创建模板 判断props少传或者只传一个的情况-->
        <headerComponent
          :data.sync="select"
          :prop="selectProps[index] || selectProps[0] || selectProps"
        ></headerComponent>
      </div>
    </div>
  </div>
  <!-- 
    <el-select
          :placeholder="select.placeholder"
          v-model="select.value"
          @change="change1"
          v-if="select.componentName == 'select'"
        >
          <el-option
            v-for="item in select.options"
            :key="
              item[
                (selectProps instanceof Array
                  ? selectProps[index].value
                  : selectProps.value) || 'value'
              ]
            "
            :label="
              item[
                (selectProps instanceof Array
                  ? selectProps[index].label
                  : selectProps.label) || 'label'
              ]
            "
            :value="
              item[
                (selectProps instanceof Array
                  ? selectProps[index].value
                  : selectProps.value) || 'value'
              ]
            "
          >
          </el-option>
        </el-select>
   -->
</template>

<script>
import headerComponent from './headerComponent.vue'
export default {
  name: 'crudPage',
  components: {
    headerComponent,
  },
  props: {
    selectList: {
      type: Array,
      default() {
        return [
          {
            placeholder: '请输入',
            value: '',
            list: [],
          },
        ]
      },
    },
    selectProps: {
      type: [Array, Object],
      default() {
        return [
          {
            label: 'label',
            value: 'value',
          },
        ]
      },
    },
    flex: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    change1(e) {
      console.log(e)
      this.$emit('change1', e)
    },
  },
  computed: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header_flex {
  display: flex;
  align-items: center;
}

.header_select_label {
  padding: 0 10px;
}
</style>
