module.exports = {
  devServer: {
    proxy: {
      '/app': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}
