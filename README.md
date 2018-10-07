# brandung-app

## Usage

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "clean": "rm -rf lib",
  "dev": "node ./src/index.dev.js",
  "develop": "rnpm run dev",
  "build": "babel src -d lib && webpack",
  "start": "node ./lib/index.js"
}
```

## Config

Find config in config.json.
Find pseudo data in data.json.

## Under The Hood
-babel
-webpack
-webpack-dev-server
-react
-express

-static files
-scss bundling