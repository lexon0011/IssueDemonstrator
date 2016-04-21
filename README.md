# IssueDemonstrator

This project will demonstrate an issues with angular2. If I found a solution to an issue, I will describe it.

# Getting started

Execute the following commands to start the webapplication

```
cd IssueDemonstrator
npm install
npm run start-dev
```

## Issue 1: OnInit will not called 

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

### Solution
The problem is solved: See [here](https://github.com/angular/angular/issues/8109)


## Issue 2: HTTP Interceptor 

I tried to implement an HTTP interceptor like [this example](https://www.illucit.com/blog/2016/03/angular2-http-authentication-interceptor/)

The problem is, that the following instruction raise an error:
 
``` 
return observable.catch((err, source) => {
        ...
        }  
    }); 
```

### How you can reproduce it
- Start the project (see Getting started) and open the the developer console in the browser (F12)
- Choose the button "Create Request"
- In the developer console you can see, that the following error occurred: observable.catch is not a function 

### What is now the question
- What I have to do, so that I get the catch available on the Observable object?

### Solution
At the moment there is no solution for this problem