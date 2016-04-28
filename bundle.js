// nodejs file
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./static/', './static/app/systemConfig.js');

var config = {
    defaultJSExtensions: true,
    paths: {
        "npm:*": "./node_modules/*",
        'angular2/*': './node_modules/angular2/*',
        'rxjs/*': './node_modules/rxjs/*',        
        "reflect-metadata": "./node_modules/reflect-metadata/Reflect"
    }  
}

function buildDone(){
    console.log('Build complete');
}
function error(err){
    console.log('Build error');
    console.log(err);
}

// all in one build
console.log("Building bundle...");
builder.bundle('appbuild/**/*.js', 'static/bundle/app.bundle.js', { minify: false, sourceMaps: false, config: config })
    .then(buildDone).catch(error);