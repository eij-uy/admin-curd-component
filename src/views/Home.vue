<template>
  <div class="home">
    <crudPage
      :selectList.sync="selectList"
      :selectProps="selectProps"
      :flex="true"
      useTabs
      :tabValue="tabValue"
      :tabList="tabList"
      @tabChange="tabChange"
      :tableData="tableData"
      :labelData="labelData"
    >
      <template #header>
        <el-button type="primary" size="small" @click="get">搜索</el-button>
      </template>
    </crudPage>
  </div>
</template>

<script>
import crudPage from '@/components/CrudPage/crudPage'
export default {
  name: 'Home',
  components: {
    crudPage,
  },
  data() {
    return {
      selectList: [
        {
          label: '获取aabb',
          placeholder: '请输入',
          value: 'aa',
          componentName: 'select',
          options: [
            {
              listLabel: 'aa',
              listValue: 'aa',
            },
            {
              listLabel: 'bb',
              listValue: 'bb',
            },
          ],
        },
        {
          label: '获取ccdd',
          placeholder: '请输入2',
          value: 'cc',
          componentName: 'select',
          options: [
            {
              listLabel: 'cc',
              listValue: 'cc',
            },
            {
              listLabel: 'dd',
              listValue: 'dd',
            },
          ],
        },
        {
          label: '获取周',
          placeholder: '请输入周',
          value: '',
          componentName: 'date-picker',
          attrs: {
            type: 'week',
            format: 'yyyy 第 WW 周',
          },
        },
        {
          label: '获取..',
          placeholder: '请输入...',
          value: '',
          componentName: 'date-picker',
          attrs: {
            type: 'datetime',
          },
        },
        {
          componentName: 'button',
          attrs: {
            type: 'primary',
            size: 'small',
          },
          // 内部显示的值
          options: [
            {
              value: '确定',
            },
          ],
        },
      ],
      selectProps: {
        label: 'listLabel',
        value: 'listValue',
      },
      tabValue: 1,
      tabList: [
        {
          label: '第一',
          value: 0,
        },
        {
          label: '第二',
          value: 1,
        },
        {
          label: '第三',
          value: 2,
        },
      ],
      tableData: [
        {
          id: '1579655081299677184',
          type: 1,
          problemDesc: '测试',
          userId: 2085180,
          userName: '余杰',
          mobile: '18056621454',
          dateTime: '2022-10-11',
          status: 1,
          createTime: 1665454094599,
          detpCode: 'A0001B0982C0001D0001E0001',
          deptName: '一年级',
          classCode: 'A0001B0982C0001D0001E0001F0001',
          className: '1班',
          schoolCode: 'A0001B0982',
          schoolName: '九江小学',
          handleDesc: '',
          handleTime: '',
          openId: null,
        },
        {
          id: '1579657043537694720',
          type: 2,
          problemDesc: '测试',
          userId: 2085180,
          userName: '余杰',
          mobile: '18056621454',
          dateTime: '2022-10-11',
          status: 3,
          createTime: 1665454559827,
          detpCode: 'A0001B0982C0001D0001E0001',
          deptName: '一年级',
          classCode: 'A0001B0982C0001D0001E0001F0001',
          className: '1班',
          schoolCode: 'A0001B0982',
          schoolName: '九江小学',
          handleDesc: '测试1',
          handleTime: '2022-10-11 14:52:04',
          openId: null,
        },
        {
          id: '1578595373813993472',
          type: 1,
          problemDesc: '这是描述',
          userId: 2015132,
          userName: '李泽辉',
          mobile: '15679111997',
          dateTime: '2022-10-08',
          status: 2,
          createTime: 1665201440658,
          detpCode: 'A0001B0105C0004D0001E0001',
          deptName: '高一',
          classCode: 'A0001B0105C0004D0001E0001F0004',
          className: '无感考勤班',
          schoolCode: 'A0001B0105',
          schoolName: '江西方寸云校',
          handleDesc: '1',
          handleTime: '2022-10-08 12:33:06',
          openId: null,
        },
        {
          id: '1578603746827571200',
          urls: '[{"id":"1","name":"1","url":"1"}]',
          type: 1,
          problemDesc: '这是描述',
          userId: 2015132,
          userName: '李泽辉',
          mobile: '15679111997',
          dateTime: '2022-10-08',
          status: 2,
          createTime: 1665203436940,
          detpCode: 'A0001B0105C0004D0001E0001',
          deptName: '高一',
          classCode: 'A0001B0105C0004D0001E0001F0004',
          className: '无感考勤班',
          schoolCode: 'A0001B0105',
          schoolName: '江西方寸云校',
          handleDesc: '测试',
          handleTime: '2022-10-10 09:26:36',
          openId: null,
        },
        {
          id: '1578686908098285568',
          urls: '[{"url":"https://fcschool.oss-cn-beijing.aliyuncs.com/tiaosheng/shouhou/2022/10/08/1665223262393729.webp","type":"image"}]',
          type: 1,
          problemDesc: '测试',
          userId: 2085180,
          userName: '余杰',
          mobile: '18056621454',
          dateTime: '2022-10-08',
          status: 2,
          createTime: 1665223264127,
          detpCode: 'A0001B0982C0001D0001E0001',
          deptName: '一年级',
          classCode: 'A0001B0982C0001D0001E0001F0001',
          className: '1班',
          schoolCode: 'A0001B0982',
          schoolName: '九江小学',
          handleDesc: '测试',
          handleTime: '2022-10-09 16:34:45',
          openId: null,
        },
      ],
      labelData: [
        {
          label: '序号',
          prop: '_index',
        },
        {
          label: '学校',
          prop: 'schoolName',
        },
        {
          label: '年级',
          prop: 'deptName',
        },
        {
          label: '班级',
          prop: 'className',
        },
        {
          label: '申请时间',
          prop: 'dateTime',
        },
        {
          label: '联系人',
          prop: 'userName',
        },
        {
          label: '联系号码',
          prop: 'mobile',
        },
      ],
    }
  },
  methods: {
    tabChange(e) {
      // console.log(this.selectList, 'selectList')
      console.log(e, 'e')
      this.tabValue = e
    },
    get() {
      console.log(this.selectList, 'selectList')
      // console.log(this.tabValue)
    },
  },
}
</script>
