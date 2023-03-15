// 跨域配置，把根目录vue.config.js改成这个
module.exports = {
  devServer: {
    port: 8080, //设置本地默认端口 选填
    proxy: { //设置代理，必须填
      '/ api': { //设置拦截器 拦截器格式 斜杠+拦截器名字，名字可以自己定
        target: 'http://localhost:9090', //代理的目标地址,后端跑的地址，用y总的可以填https://app165.acapp.acwing.com.cn
        changeOrigin: true,
        ws: true,
        pathRewrite: { //路径重写
          '^ /api': '' //选择忽略拦截器里面的内容
        }
      }
    }
  }
}

