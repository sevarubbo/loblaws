const path = require("path");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    externals: {
        jquery: "jQuery",
        ember: "Ember"
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: "./webpack-loaders/ember-template-loader"
            },
            {
                test: /app\/index\.js/,
                loader: './webpack-loaders/inject-templates-loader!./webpack-loaders/module-loader'
            }
        ]
    }
};