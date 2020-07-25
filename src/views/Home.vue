<template>
  <div class="home">
    <el-tabs
      tab-position="left"
      type="border-card"
      style="height: 200px;"
    >
      <el-tab-pane
        v-for="item in clientData"
        :key="item.name"
        :label="item.name"
      >
        <ClientInfo
          v-model="item.data"
          :step="`${step}`"
          :mode="mode"
          @update:step="val => step = val"
          ref="clientInfo"
        />
      </el-tab-pane>
    </el-tabs>
    <el-button
      type="primary"
      @click="submit"
    >提交</el-button>
    <el-button
      type="primary"
      @click="stepChange"
    >下一步</el-button>
    <el-button
      type="primary"
      @click="mode = 'view'"
    >查看</el-button>
    <el-button
      type="primary"
      @click="mode = 'edit'"
    >编辑</el-button>
  </div>
</template>

<script>
import ClientInfo from '../components/ClientInfo'
export default {
  components: {
    ClientInfo
  },
  data () {
    return {
      step: 1,
      // edit/add/view
      mode: 'view',
      clientData: [
        {
          name: '客户端1',
          data: {
            flow1Params: {},
            flow2Params: {},
            flow3Params: {},
            flow4Params: {}
          }
        },
        {
          name: '客户端2',
          data: {
            flow1Params: {},
            flow2Params: {},
            flow3Params: {},
            flow4Params: {}
          }
        }
      ]
    }
  },
  mounted () {
    // console.log(this.$refs.clientInfo)
  },
  methods: {
    stepChange () {
      if (this.step < 4) {
        this.step++
      }
    },
    validator () {
      Promise.all(
        (this.$refs.clientInfo || [])
          .map(client => (client.$refs.form || []).filter(item => item.$options.step === Number(this.step))[0])
          .map(item => item.validator())
      ).then(res => {
        console.log(this.clientData)
        setTimeout(() => {
          this.$notify({
            type: 'success',
            message: '成功',
            title: ''
          })
        })
      })
    },
    submit () {
      this.$nextTick(() => {
        this.validator()
      })
    }
  }
}
</script>

<style lang="scss">

</style>
