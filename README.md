# React Apollo - playground

[![Known Vulnerabilities](https://snyk.io/test/github/wmgregory/react-apollo/develop/badge.svg)](https://snyk.io/test/github/wmgregory/react-apollo/develop)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

TODO description

## Getting Started

## Install dependencies

In terms of installing the webapp, this is all you need to do:

```
$ cd client/ && yarn
$ cd server/ && yarn
```

## Serve

To run the server (through AWS)

```
$ yarn start             # TODO
$ cd client/ && yarn start
$ cd server/ && yarn start
```

## Deployment
```
yarn build               # builds to /dist
yarn deploy              # deploy directly to server
```

## Run unit tests

Uses Jest + Enzyme

```
$ yarn test               # TODO
$ cd client/ && yarn test
$ cd server/ && yarn test
```

## Run E2E tests

Uses Cypress

```
$ yarn e2e                # TODO
```

## Lint

Uses Prettier & TSLint

## Tech Stack

### Build

- [React 16](https://reactjs.org/)
- TypeScript
- Apollo Server
- serverless
- [Emotion](https://emotion.sh)
- [Material UI](https://material-ui.com)

### Testing

- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://www.cypress.io/)