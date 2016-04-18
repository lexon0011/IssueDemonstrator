System.config({
    packages: {
        "appbuild": {
            defaultExtension: "js",
            format: "register", // system.register
            main: "app" // app.js
        },
        'rxjs': {defaultExtension: 'js'} 
    },
    paths: {
        "npm:*": "/node_modules/*"
    },
    map: {
        "rxjs": 'npm:rxjs',
        "es6-promise": "npm:es6-promise/dist/es6-promise.js",
        "redux": "npm:redux/dist/redux.js",
        "reflect-metadata": "npm:reflect-metadata/Reflect.js",
        "crypto": "@empty" // ignore the crypto dependency
    }
});