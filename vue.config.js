module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    overlay: false,
    port: 8080,
    contentBase: '.',
    proxy: { // 이부분 추가
      '^/api': {
        target: 'http://127.0.0.1:8020', // 요청할 서버 주소
        pathRewrite: { '^/context/api': '' },
        changeOrigin: true,
        logLevel: 'debug', // 터미널에 proxy 로그가 찍힌다. 
      },
    },
  }
}
