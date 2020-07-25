<template>
  <div class="flow4">
    <el-form
      :model="formData"
      ref="myForm4"
      :disabled="mode === 'view'"
    >
      <el-form-item
        label="客户端名称4"
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
  name: 'Flow4',
  step: 4,
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
        required: true,
        message: '不能为空'
      }
    }
  },
  mounted () {
    console.log(this.$refs.myForm4)
  },
  methods: {
    async validator () {
      if (this.$refs.myForm4) {
        try {
          if (this.relativeProperty && !this.relativeProperty.clientName) {
            setTimeout(() => {
              this.$message.error('流程2的客户名称必填')
            })
            return Promise.reject(new Error(false))
          }
          const result = await this.$refs.myForm4.validate()
          return result
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }
  }
}
</script>
