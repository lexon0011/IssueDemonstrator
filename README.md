# IssueDemonstrator

This project will demonstrate an issues with angular2 in combination of ES6-promise and SystemJS.

### What is the problem
If the application register an service which use ES6-promise (```new Promise((resolve,reject) => { ... });```), than the LifeCycle method ```ngOnInit``` will not called.

### How you can reproduce it
- Start the project (see Getting started) and open the the developer console in the browser (F12)
- Choose the button "Show Site 1"
- You can see, that only "Site1 - constructor called" will be outputed in the console. But the ngOnInit will not executed!
- Remove the following code from the app.ts (bootstrap):  ```provide(PermissionService, { useClass: PermissionService })```
- Open again http://127.0.0.1:8080/static and choose again the button "Show Site 1". Now ngOnInit will be called!

### What is the problem
- As soon as I register in the bootstrap methode a service which deals with promise, the LifeCycle will not works regular
- In this sample I use the permissionService.ts to demonstrate this phenomenon
- Note: The methode GetPermissionsForUser of the permission Service is never called? Nevertheless, it caused the error

### What is now the question
- What is the correct way to use ES6-promise in an angular 2 project?
- Is there a mistake in the SystemJS configuration? (systemConfig.js)?


# Getting started

Execute the following commands to start the webapplication

```
cd IssueDemonstrator
npm install
npm run start-dev
```



