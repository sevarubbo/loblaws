const
    path = require("path"),
    compiler = require("components-ember/ember-template-compiler"),
    recursive = require("recursive-readdir-sync"),
    s = require("underscore.string");

/**
 * @class
 */
class EmberModule {

    /**
     * @param {String} filePath
     */
    constructor (filePath) {

    }

}

module.exports = function (content) {

    const
        appDir = "app",
        modulePaths = recursive(appDir).filter(filePath => /\.js$/.test(filePath)).map(filePath => {
            return filePath.replace(appDir, ".");
        }),
        imports = modulePaths.map(filePath => {
            return `import "${filePath}";`;
        }),
        lookups = modulePaths.map(filePath => {
            console.log(111, filePath);
        });

    content += "\n\n" + imports.join("\n");


    return content;

};