# Battle Simulator

## The Specification

The simulator should be developed in JavaScript or TypeScript using React. It is preferred but not required to use
reducer-based state management (e.g useReducer, Redux). You may use any other libraries or UI frameworks you
wish so long as you have implemented the core requirements yourself.

In this game you (The Player) are fighting some kind of monster (your choice). Both characters begin with 100
health points. The two health values must be represented somehow on the screen.

The UI consists of an “Attack!” button. When you click this, the following sequence should happen:

1. Two dice are rolled for The Player
2. Two dice are rolled for The Monster. All dice are 6-sided. For each roll pick a random number between 1 and 6. The results of all 4 rolls should be displayed.
3. Whoever scores the lowest total will take damage and lose health points. The amount of health they
lose will be the difference between the two rolls. So: if the player rolls a 2 and a 3, and the monster rolls
a 4 and a 5, the player will take (4+5)-(3+2) = 4 damage.
4. Now the player can attack again when they like

If The Player loses all their health the game stops and “Game Over” is displayed in large red text.

If the monster loses all their health the game ends and “You Win” is displayed in large green text.

**NOTE:** *there are 2 contributors shown (GHMT and matomase). Both are me from different laptops and github users.*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Production-ready architecture and building considerations

*  Typescript for less error prone code
*  sass & [7-1 pattern architecture](https://sass-guidelin.es/#the-7-1-pattern)
*  Configuration for unit + snapshot tests with Jest & Enzyme (80% coverage setup)
*  Modules, components and domain separation of concerns for code scalability
*  [Redux](https://redux.js.org/) for reducer-based state management
*  Linting ([eslint](https://www.npmjs.com/package/eslint), [stylelint](https://www.npmjs.com/package/stylelint)) and code formatting tools ([prettier](https://www.npmjs.com/package/prettier)) for code quality and readability.
*  Git hooks made easy with [husky](https://www.npmjs.com/package/husky) to assure code is in remote as defined by the linting and code formatting configurations, together with all passed unit tests and coverage (note that tests are not implemented yet, but everything is configured) 
*  [Model-adapter pattern](https://dev.to/florimondmanca/consuming-apis-in-angular--the-model-adapter-pattern-3fk5) for API-to-APP (no API but Redux data in this case) objects transformation (with some personal enhancements like adding an interface and specific typings)
*  Build ready for targeting different browsers and versions (through [browserlist](https://github.com/browserslist/browserslist) + [postcss](https://postcss.org/) & [babel](https://babeljs.io/))

## Other considerations + bonus implementations

*  Responsiveness through [Bootstrap](https://getbootstrap.com/)
*  Scalable enough to add more players (by adding one player in an array; re-build needed at the moment)
*  Scalable enough to add more dices to each player (by just changing a number in the initial configuration; re-build needed at the moment)

## Out of scope (due to lack of time)

*  Error handling module for expected and unexpected exceptions
*  Some parts of the UI change their dimensions when some elements appear / dissapear
*  Enhancements on image resizing during viewport changes (responsiveness of player's avatars)
*  Integration & e2e tests
*  Unit testing

## VS Code Plugins

If you are using VS Code as your IDE, it is recommended that you install the following plugins:

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [Stylelint](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)
3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

You will find some setup for these plugins in the .vscode folder of this project, in order to make your development stage easier and faster. 

## Run instructions

**NOTE:** be sure to have installed node in your environment. At the time of developing this app I am using node version 12.14.0 and npm version 6.13.4.

1. `npm install`
2. `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test` (no tests implemented at the moment; this script fails)

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
