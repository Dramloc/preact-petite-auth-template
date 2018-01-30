# preact-petite-auth-template

A simple `preact-cli` template for [petite-auth](https://github.com/Dramloc/petite-auth). Live demo is available [here](https://petite-auth.surge.sh/).

## Usage

``` bash
$ yarn global add preact-cli
$ preact create dramloc/preact-petite-auth-template my-project --yarn --name=my-project
$ cd my-project
$ yarn start
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## OAuth2 configuration

Update `AUTHORIZE_URL`, `CLIENT_ID` and `PROFILE_URL` in `preact.config.js`.
See [https://github.com/Dramloc/petite-auth](https://github.com/Dramloc/petite-auth) for more information.

## Commands

- `yarn start`: Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`: Production-ready build

- `yarn lint`: Pass JavaScript files using ESLint
