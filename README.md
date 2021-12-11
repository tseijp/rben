<p align="center">

# RBEN👺
[![][github-actions-img]][github-actions]
[![][code-quality-img]][code-quality]
[![][license-img]][license]

</p>

RBEN is a tool to Benchmark Ruby code inside the browser.
This project is a fork of [run.rb][runrb].

> This project compiles Ruby to WebAssembly.
> Inside /emscripten you'll find (currently)
> Ruby 2.6.0 and the tooling required to compile Ruby to WASM.

### What does it look like?


```js
<Rben
  Globals={['puts "hello"']}
  Cases={['puts "hello"']}
/>
```

### Getting Started

__Installation__
```shell
git clone https://github.com/tseijp/rben
```

__Local Development__

Run the development server:

```shell
cd rben
yarn init
yarn start
```
This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.
Your site starts at [http://localhost:3000](http://localhost:3000).

__Build__

```shell
$ yarn build
```

This command generates static content into the `build` directory
and can be served using any static contents hosting service.

__Deployment__

```shell
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

[runrb]: https://github.com/jasoncharnes/run.rb

[github-actions]: https://github.com/tseijp/rben/actions
[code-quality]: https://www.codefactor.io/repository/github/tseijp/rben
[license]: https://www.npmjs.com/package/use-midi

[github-actions-img]: https://img.shields.io/github/workflow/status/deno-libs/gql/CI?logo=github&style=flat&colorA=000&colorB=000
[code-quality-img]: https://img.shields.io/codefactor/grade/github/tseijp/rben?style=flat&colorA=000&colorB=000
[license-img]: https://img.shields.io/badge/license-MIT-black?style=flat&colorA=000&colorB=000
