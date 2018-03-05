# The Demo application
Has a backend a a Frontend

##  Frontend
Angular4. `angular-cli` is used as cli  tool to automate angular tasks, like build, run, serve
The Frontend was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.


##### ng new my-dream-app
creates a new Angular4 application 

##### build for dev / prod
The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
```
ng build --prod \
ng build --dev \
ng build --target=production --environment=prod
```

##### watch. Run build when files change
```
ng build --watch
```

##### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


##### pre compile on server side
 The Angular Ahead-of-Time (AOT) compiler converts your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code.
```
ng build --aot
ng serve --aot
```

###### Easily test your app locally while developing.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
ng serve 
ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153
```


###### run the unit tests karma
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

``` 
ng test
```

###### run e2e tests, e.g. via procractor
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

```
ng e2e
```


###### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Backend
Spring Boot. Use the wrapper "gradlew" because it will download the right version of gradle


###### builds / starts the whole project. 
Build and start Backend and Frontend. The frontend is build, because an npm task is defined as dependend

```
gradlew bootRun
```

###### build the backend
```
gradlew build
 ```

###### create a fat jar 
Create a fat jar runnable via "java -jar complete.jar"
```
gradlew BootJar
```

###### create a WAR  
Create a WAR deployable to tomcat. On Tomcat Java7 is required. 
Tested with Tomcat8. 
```
gradlew BootWar
```

