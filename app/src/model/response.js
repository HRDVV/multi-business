const { customCode } = require('../constants/customCode')

class ResponseWraper {
  static success (data) {
    return {
      data,
      code: customCode.SUCCESS,
      success: true,
      message: null
    }
  }

  static error (message) {
    return {
      data: null,
      code: customCode.ERROR,
      success: false,
      message
    }
  }
}

module.exports = ResponseWraper
