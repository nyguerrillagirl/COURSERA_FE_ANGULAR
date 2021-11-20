# ConFusion

Week #4 Assignment [Coursera Course: Front-End JavaScript Frameworks: Angular]

Client-Server Communication

In this module you will explore client-server communication using both Angular HTTP module and the REST API. You will get a brief introduction to animation support in Angular and create a custom attribute directive. You will also learn about testing, building and deploying Angular applications.

Task 1

- The promotion service methods have been correctly configured to use HTTP client to get the data from the server.

- The home component is correctly obtaining the promotion data from the service, and handling any errors that might -arise.


Task 2

- The home component is correctly obtaining the leader data from the service, and handling any errors that might arise.

- The about component is correctly obtaining the leader data from the service, and handling any errors that might arise.


Task 3

- A new feedback service is correctly implemented to use the POST method from HTTP client to post the feedback data to the server.

- The contact component has been correctly updated to use the feedback service to post the form data to the server using the submitFeedback() method supported by the service.


Task 4

- When the form is submitted, the progress spinner is being displayed until the server responds confirming the update on the server side.

- The returned Observable from the submitFeedback() function is correctly being used to confirm the successful submission of the feedback to the server.

- The information from the returned feedback object is being displayed in the format as shown in the video for 5 seconds. Thereafter it is hidden and the empty form is shown to the user enabling them to submit the feedback again.

- The expand animation is being used to judiciously apply animation to the various stages of the form submission.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
