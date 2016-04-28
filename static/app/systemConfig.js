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
        "redux": "npm:redux/dist/redux.js",
        "reflect-metadata": "npm:reflect-metadata/Reflect.js",
        "crypto": "@empty" // ignore the crypto dependency
    }
});