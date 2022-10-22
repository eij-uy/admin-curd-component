<template>
  <div class="home">
    <crudPage
      :selectList.sync="selectList"
      :selectProps="selectProps"
      @change1="change1"
      :flex="true"
    ></crudPage>
    <button @click="get">开始</button>
  </div>
</template>

<script>
import crudPage from '@/components/crudPage'
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
          placeholder: '',
          value: 'cc',
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
      ],
      selectProps: {
        label: 'listLabel',
        value: 'listValue',
      },
    }
  },
  methods: {
    change1() {
      console.log(this.selectList, 'selectList')
    },
    get() {
      console.log(this.selectList, 'selectList')
    },
  },
}
</script>
