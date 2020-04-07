# ProductAdviserFront

Includes a form and list of all products.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-Node.js (installed with NPM)

-NPM CLI

-ANGULAR CLI

### Backend

This project requires running instance of [product-adviser](https://github.com/Aurrix/product-adviser) service running on port **8081**.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running with Docker

This will option will run provide you production grade ready server (nginx) and angular app with it. Public image aurrix/seb:product-adviser-front. You would need make port forwarding and provide argument API_URL that referes to address of backend server that needs to be set-up before.

```
docker run -p 80:80 aurrix/seb:product-adviser-front API_URL='the address'
```

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License

This project is licensed under the [Apache License 2](https://www.apache.org/licenses/LICENSE-2.0)

