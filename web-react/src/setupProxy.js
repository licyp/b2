// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function (app) {
//   app.use(
//     '/graphql',
//     // proxy({
//       createProxyMiddleware({
//       target: `${process.env.PROXY}`,
//       changeOrigin: true,
//     })
//   )
// }
//
//
//
// // app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
// // app.listen(3000);

const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/graphql',
    proxy({
      target: `${process.env.PROXY}`,
      changeOrigin: true,
    })
  )
}
