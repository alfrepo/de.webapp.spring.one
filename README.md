# The Demo application
Has a backend a a frontend.

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

##### Easily test your app locally while developing.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
ng serve 
ng serve --host 0.0.0.0 --port 4201 --live-reload-port 49153
```


##### run the unit tests karma
Run `ng test` to execute the jasmine unit tests via [Karma](https://karma-runner.github.io).
The jasmine tests must have the ending "*.spec.ts".
They are located under "src/test/angular/app"

``` 
ng test
```

##### run e2e tests, e.g. via procractor
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

```
ng e2e
```


##### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Backend
Spring Boot. Use the wrapper "gradlew" because it will download the right version of gradle


##### builds / starts the whole project. 
Build and start Backend and Frontend. The frontend is build, because an npm task is defined as dependend

```
gradlew bootRun
```

##### build the backend
```
gradlew build
 ```

##### create a fat jar 
Create a fat jar runnable via "java -jar complete.jar". The output will be located somewhere under "build/libs"
```
gradlew bootJar
```

##### create a WAR  
Create a WAR deployable to tomcat. On Tomcat Java7 is required. 
Tested with Tomcat8. 

The deployed WAR has usually another URL, than root \
To modify the base Frontend URL of the application - one should pass the URL, when building the applicaiton. 

```
ng build --base-href /de.webapp.spring.one-0.0.1-SNAPSHOT/
gradlew bootWar
```
After that the WAR may be deployed and will accept the URL. Otherwise the app will reutrn `404 Responses`.

![alt text](https://lh3.googleusercontent.com/-338MJ6cYX3Q/Wp1guI7L-VI/AAAAAAAAAEI/-FSKHmUbWFw7vpyrMP1MVinhuwC88B12QCHMYCw/s0/2018-03-05_16-22-31.png "DeployToTomcat8")


![alt text](https://lh3.googleusercontent.com/-kxfIr26UFBM/Wp1g3MkkM8I/AAAAAAAAAEM/vWEQkwvDedQQxAUGitAt5b1dKTAXp8nPQCHMYCw/s0/2018-03-05_16-23-08.png "Run")


##  Building the whole application
'''
# install npm, install angular-cli (provides the 'ng' command), java
npm install 

# build the frontend
ng build

# build the backend
gradlew build

# package the fat jar with the frontend, backend and a tomcat server
gradlew bootJar

'''
