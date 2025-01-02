# 👺rben

<p align="center">

[![][status-img]][status]
[![][code-quality-img]][code-quality]
[![][license-img]][license]

<a href="https://tseijp.github.io/rben">
  <img alt="👺" height="128px" src="https://i.imgur.com/lQQwQqx.gif" />
</a>

</p>

RBEN is a tool to Benchmark Ruby code inside the browser.
This project is a fork of [run.rb][runrb].

> This project compiles Ruby to WebAssembly.
> Inside /emscripten you'll find (currently)
> Ruby 2.6.0 and the tooling required to compile Ruby to WASM.

## What does it look like?

```js
<Rben
  Globals={['puts "hello"']}
  Cases={['puts "hello"']}
/>
```

## Getting Started

### Installation

```shell
git clone https://github.com/tseijp/rben
cd rben
yarn
```

### Local Development

Run the development server:

```shell
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.
Your site starts at [http://localhost:3000](http://localhost:3000).

### Build

```shell
yarn build
```

This command generates static content into the `build` directory
and can be served using any static contents hosting service.

### Deployment

```shell
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

[runrb]: https://github.com/jasoncharnes/run.rb

[status]: https://github.com/tseijp/rben/actions
[code-quality]: https://www.codefactor.io/repository/github/tseijp/rben
[license]: https://www.npmjs.com/package/use-midi

[status-img]: https://img.shields.io/badge/build-passing-red?style=flat&colorA=000&colorB=d00
[code-quality-img]: https://img.shields.io/codefactor/grade/github/tseijp/rben?style=flat&colorA=000&colorB=d00
[license-img]: https://img.shields.io/badge/license-MIT-black?style=flat&colorA=000&colorB=d00
