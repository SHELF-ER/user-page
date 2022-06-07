const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    cookieParser(
      process.abort.apply, 
      {
      sameSite: "none",
      secure: true
      }
    ),
    createProxyMiddleware(
      ['/api', '/none'],
      {
        target: 'http://localhost:5000',
        changeOrigin: true,
        router: {
          '/none': process.env.REACT_APP_V2_URL
        },
        pathRewrite: {
          '^/none': ''
        }
      }
    )
  );
}