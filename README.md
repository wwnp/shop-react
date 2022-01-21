https://github.com/wwnp/movies-react/settings/secrets/actions > New Repozitory Secret : REACT_APP_API_KEY = c0a755ed...
npm i gh-pages -D

package.json
{
  "name": "shop-react",
  "homepage": "https://github.com/wwnp/shop-react"
  ...
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  },
}

npm i -D --save-exact mini-css-extract-plugin@2.4.5 // if have error TypeError: MiniCssExtractPlugin is not a constructor

npm deploy
npm update

https://github.com/wwnp/shop-react/settings/pages > Source > Change branch on gh-pages