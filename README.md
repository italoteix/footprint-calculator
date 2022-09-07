# Footprint calculator

Live Demo: https://footprint-calculator.vercel.app/

This project was created as a challenge for [South pole](https://www.southpole.com/).
It shows a calculator for personal CO2 emission during flights.

Regarding the layout, some dummy stuff was added just to make the project look more like a complete application, instead of just showing the required components. For demo purpose, the airport distance api is mocked with a simple function that returns the distance based on coordinates. The code for this mock is inside `src/mockedServer`

## Project Features

- TypeScript: for static testing and other cool functionalities.
- Component library: Chakra-ui. Same as the real website.
- Library: React.
- Unit Tests with Jest and Testing-Library.
- Prettier for a better standardized code.
- ESLINT for better development and readability of the produced code.
- ReactQuery, used just to show server state management skills, as the scope of the project doesn't call much for such setup.
- Responsive application.
- Well moduled and componentially structured.
- Husky + LintStaged + Git hooks: precommit for running linters and prettier, prepush for doing unit tests.

## Credits

Logo and design form the actual calculator from South Pole website.

## Development server

Run `npm start` for a dev server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The app will automatically reload if you change any of the source files. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.

## Running unit tests

Run `npm test`.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Running end-to-end tests

To run end-to-end tests locally, first start the app runing `npm start` and then start cypress running `npx cypress open`.

## Further help

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
