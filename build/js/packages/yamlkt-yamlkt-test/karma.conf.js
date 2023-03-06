
module.exports = function(config) {

config.set({
  "singleRun": false,
  "autoWatch": false,
  "basePath": "/Users/ncipollo/src/yamlkt/build/js/packages/yamlkt-yamlkt-test/node_modules",
  "files": [
    "/Users/ncipollo/src/yamlkt/build/js/packages/yamlkt-yamlkt-test/adapter-browser.js"
  ],
  "frameworks": [
    "mocha",
    "karma-kotlin-debug"
  ],
  "client": {
    "args": []
  },
  "browsers": [
    "ChromeHeadless"
  ],
  "customLaunchers": {},
  "failOnFailingTestSuite": false,
  "failOnEmptyTestSuite": false,
  "reporters": [
    "karma-kotlin-reporter"
  ],
  "preprocessors": {
    "/Users/ncipollo/src/yamlkt/build/js/packages/yamlkt-yamlkt-test/adapter-browser.js": [
      "webpack",
      "sourcemap"
    ]
  }
});
config.plugins = config.plugins || [];
config.plugins.push('kotlin-test-js-runner/karma-kotlin-reporter.js');

config.loggers = [
    {
        type: 'kotlin-test-js-runner/tc-log-appender.js',
        //default layout
        layout: { type: 'pattern', pattern: '%[%d{DATE}:%p [%c]: %]%m' }
    }
]

// webpack config
function createWebpackConfig() {
let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = false;
config.ignoreWarnings = [/Failed to parse source map/]

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/ncipollo/src/yamlkt/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    
            // https://github.com/webpack/webpack/issues/12951
            const PatchSourceMapSource = require('kotlin-test-js-runner/webpack-5-debug');
            config.plugins.push(new PatchSourceMapSource())
            
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
        moduleFilenameTemplate: "[absolute-resource-path]"
    }))
})(config);
   return config;
}

config.set({webpack: createWebpackConfig()});

if (!config.plugins) {
    config.plugins = config.plugins || [];
    config.plugins.push('karma-*'); // default
}

config.plugins.push('kotlin-test-js-runner/karma-debug-framework.js');

}
