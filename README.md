# ConFusion

Week #3 Assignment [Coursera Course: Front-End JavaScript Frameworks: Angular]

Task 1
======
In this task you will construct the form for users to submit their comments. You need to complete the following:
- Set up the form as a reactive form using the reactive form builder with the three fields: author, rating and comment. Note that this should match the fields in the Comment class that acts as the data model for the form.
- The rating should be set to 5 by default. Use the Angular Material slider component to provide an intuitive way of submitting the rating. The slider should show tick marks and use the thumb label to show the rating value when the user is selecting the rating.

Task 2
======
In this task, you will enable form validation using Angular support for reactive form validation. You need to complete the following:

- The author and comments are required fields and the user has to enter appropriate information in both the fields.             
Furthermore the author field should at least be two characters long.
- The submit button should be disabled until the user has entered all the required fields.
- The user should be alerted by showing the invalid fields in red, and a message displayed at the bottom of the field.
- You should use the valueChanges observable to trigger the form validation and do all the form validation in code similar to the way it was done in the Reactive Forms Part 3 exercise.

Task 3
======
In this task you will enable real-time preview of the user's comments in the Angular application in the dishdetail view. This should be displayed in the same format as the regular comments. You need to complete the following tasks:
- Show a preview just above the form using the same format as the regular comments on the page. The preview should not include the submission date as it is not yet added to the comment.
- Display the preview only if the user has entered valid information into the form.
- Upon submitting the valid comment, the comment should join the regular comments on the page. To do this you need to map the Form model into the data model. The date for the comment should be set automatically upon submission of the form. Both these actions should be done in the function that handles the form submission in code. You can use the JavaScript array push method to add the comment into the comments array of the dish. You can use the JavaScript date (see here for an example) method to set the date to ISO string.
- Upon successful submission, the form is reset to its default value with the rating set to 5.



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
