module.exports = {
  publicPath: '', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'public', // 放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  lintOnSave: true, // 是否在保存的时候检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  // css: {
  //   extract: true, // 是否使用css分离插件 ExtractTextPlugin
  //   sourceMap: false, // 开启 CSS source maps
  //   loaderOptions: {}, // css预设器配置项
  //   modules: false // 启用 CSS modules for all css / pre-processor files.
  // },
  // 反向代理
  devServer: {
    // 环境配置
    port: 9090,
    open: true, // 配置自动启动浏览器
    proxy: {
      '/deedSrock': {
        target: 'https://www.deadstock.ca',
        pathRewrite: {
          '^/deedSrock': ''
        }
      },
      '/socialStatus': {
        target: 'https://www.socialstatuspgh.com',
        pathRewrite: {
          '^/socialStatus': ''
        }
      },
      '/api': {
        target: 'http://127.0.0.1:8000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  },
  runtimeCompiler: true,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    config.module.rule('images').use('image-webpack-loader').loader('image-webpack-loader').options({
      bypassOnDebug: true
    }).end()
  },
  configureWebpack: (config) => {
    // config.entry = ['babel-polyfill', './src/main.js']
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        runtimeChunk: {
          name: 'manifest'
        },
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial' // 只打包初始时依赖的第三方
            },
            lodash: {
              name: 'chunk-lodash',
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              priority: 20
            },
            xlsx: {
              name: 'chunk-xlsx',
              test: /[\\/]node_modules[\\/]xlsx[\\/]/,
              priority: 20
            },
            echarts: {
              name: 'chunk-echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
              priority: 20
            },
            elementUI: {
              name: 'chunk-elementui', // 单独将 elementUI 拆包
              priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
              test: /[\\/]node_modules[\\/]element-ui[\\/]/
            }
          }
        }
      }
    }
  }
}
