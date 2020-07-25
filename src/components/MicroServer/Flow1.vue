<template>
  <div class="flow1">
    <el-form
      :model="formData"
      :disabled="mode === 'view'"
      ref="myForm1"
    >
      <el-form-item
        label="客户端名称1"
        :rules="rules"
        prop="clientName"
      >
        <el-input v-model="formData.clientName" placeholder="请输入" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Flow1',
  step: 1,
  props: ['value', 'relativeProperty', 'mode'],
  computed: {
    formData: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  data () {
    return {
      rules: {
        required: false,
        message: '不能为空'
      }
    }
  },
  mounted () {
    console.log(this.$refs.myForm1)
  },
  methods: {
    async validator () {
      if (this.$refs.myForm1) {
        try {
          if (this.relativeProperty && !this.relativeProperty.clientName) {
            setTimeout(() => {
              this.$message.error('流程2的客户名称必填')
            })
            return Promise.reject(new Error(false))
          }
          const result = await this.$refs.myForm1.validate()
          return result
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }
  }
}
</script>
