# Catmash

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Description

Catmash is an app that enables to vote for cats in one page and see the number of votes that each cat got in another one . While waiting for api response, a spinner is displayed . Once we get the api reponse , two cats are displayed randomly . You can vote on one of the cats by clicking on its image . In case of api error , an error page with "Sorry nothing to display" message is displayed . To navigate to the ranking page, you can click on the ranking button . You will land on /cats page where the cats are ordered in a descendant order based on the number of votes . First only the first 10 cats are displayed, to load 10 other cats , you can click on load cats button and so on. I added a navbar with a link to be able to go back to the voting page from the ranking page . The app needs to be tested as well by navigating between the two pages using browser back and next buttons.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
