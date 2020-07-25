<template>
  <div class="client-info">
    <el-tabs
      v-model="index"
      type="card"
      :before-leave="beforeLeave"
    >
      <el-tab-pane
        v-for="item in list"
        :key="item.step"
        :label="item.flowName"
        :name="`${item.step}`"
      >
        <component
          ref="form"
          :is="item.componentName"
          :relativeProperty="clientInfo[item.relativeProperty]"
          :mode="mode"
          v-model="clientInfo[item.propertyName]"
        ></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as cp from '../MicroServer'
export default {
  props: ['value', 'step', 'mode'],
  components: {
    ...cp
  },
  computed: {
    clientInfo: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    index: {
      get () {
        return this.step
      },
      set (val) {
        this.$emit('update:step', val)
      }
    }
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getClientList().then(result => {
      this.list = result || []
    })
  },
  methods: {
    beforeLeave (n, o) {
      return true
      // return (this.$refs.form || [])
      //   .filter(item => item.$options.step === Number(o))[0]
      //   .validator()
    },
    async getClientList () {
      const result = await fetch('http://localhost:8080/app/flow/r/list')
      const data = await result.json()
      if (data.success) {
        return data.data
      }
      return Promise.reject(data.message)
    }
  }
}
</script>

<style>

</style>
