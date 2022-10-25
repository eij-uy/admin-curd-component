<template>
  <div>
    <div :class="['header', { header_flex: flex }]">
      <div
        :class="['header_select', { header_flex: flex }]"
        v-for="(select, index) in selectList"
        :key="index"
        :style="flex ? 'padding: 10px 10px 0 0' : 'padding-bottom: 10px'"
      >
        <div
          class="header_select_label"
          :style="
            (flex ? '' : 'padding-bottom: 10px;') +
            (labelWidth ? 'width:' + labelWidth : '')
          "
        >
          {{ select.label }}
        </div>
        <!-- 使用render函数创建模板 判断props少传或者只传一个的情况-->
        <headerComponent
          :data.sync="select"
          :prop="selectProps[index] || selectProps[0] || selectProps"
        >
        </headerComponent>
      </div>
      <div :style="flex ? 'padding: 10px 10px 0 0' : 'padding-bottom: 10px'">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="tabs" v-if="useTabs">
      <el-radio-group
        v-model="editorTabValue"
        :size="tabSize"
        style="padding: 10px 0 20px"
        @change="tabChange"
      >
        <el-radio-button
          v-for="item in tabList"
          :key="item.value"
          :label="item.value"
          >{{ item.label }}</el-radio-button
        >
      </el-radio-group>
    </div>
    <div class="content">
      <el-table :data="tableData">
        <el-table-column
          v-for="(item, index) in labelData"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        ></el-table-column>
        <el-table-column v-if="useActiveSlot" label="操作">
          <slot name="active"></slot>
        </el-table-column>
      </el-table>
    </div>
  </div>
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
    labelWidth: {
      type: String,
      default: '',
    },
    flex: {
      type: Boolean,
      default: false,
    },
    useTabs: {
      type: Boolean,
      default: false,
    },
    tabValue: {
      type: Number,
      default: 0,
    },
    tabList: {
      type: Array,
      default() {
        return [
          {
            label: '不知道',
            value: 0,
          },
        ]
      },
    },
    tabSize: {
      type: String,
      default: 'mini',
    },
    tableData: {
      type: Array,
      default() {
        return []
      },
    },
    useActiveSlot: {
      type: Boolean,
      default: false,
    },
    labelData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      editorTabValue: this.tabValue,
    }
  },
  methods: {
    tabChange(e) {
      this.$emit('tabChange', e)
    },
  },
  computed: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.header_select {
  padding-right: 10rpx;
}

.header_select_label {
  /* padding: 0 10px; */
  padding-right: 10px;
}
/* .header_select:first-child > .header_select_label { */
/* padding-left: 0; */
/* } */
</style>
