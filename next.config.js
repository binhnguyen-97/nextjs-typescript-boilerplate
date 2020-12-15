const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
  webpack(config, _) {
    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      exclude: path.resolve(__dirname, 'node_modules/'),
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    })

    return config
  },
})
