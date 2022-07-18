const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
    var domain = function(param){
        if(process.env.NODE_ENV == 'development'){
            return param.dev
        }
        if(process.env.NODE_ENV == 'test'){
            return param.test
        }
        if(process.env.NODE_ENV == 'production'){
            return param.prod
        }
    }
  app.use(
    createProxyMiddleware("/gateway",{
      target: domain({
        dev: 'http://liefeng-gateway.test.gongxiangplat.com',
        test: 'http://liefeng-gateway.test.gongxiangplat.com',
        prod: 'https://api.gateway.prod.liefengtech.com',
      }), //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      pathRewrite: { "^/gateway": "" }, 
    }),
    createProxyMiddleware("/basic",{
        target: domain({
          dev: 'http://liefeng-gateway.test.gongxiangplat.com',
          test: 'http://liefeng-gateway.test.gongxiangplat.com',
          prod: 'https://api.gateway.prod.liefengtech.com',
        }), //配置转发目标地址(能返回数据的服务器地址)
        changeOrigin: true, //控制服务器接收到的请求头中host字段的值
        pathRewrite: { "^/basic": "" }, 
      }),
      createProxyMiddleware("/host",{
        target: domain({
          dev: 'http://localhost:8080',
          test: 'http://localhost:8080',
          prod: 'http://localhost:8080',
        }), //配置转发目标地址(能返回数据的服务器地址)
        changeOrigin: true, //控制服务器接收到的请求头中host字段的值
        pathRewrite: { "^/host": "" }, 
      }),
  )
}