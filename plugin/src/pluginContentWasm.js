/**
 * @content: docusaurus.config.js
 * @options: args[1]
 */
function pluginContentWasm(context, options) {
    return {
        configureWebpack (config, isServer, utils, content) {
            const { getJSLoader, getCacheLoader } = utils;
            const _config = {}
            _config.module = {}
            _config.module.rules = [
                {
                    test: /miniruby\.wasm$/,
                    type: "javascript/auto",
                    loader: "file-loader"
                }, {
                  test: /\.worker\.js$/,
                  use: { loader: 'worker-loader' }
                }
            ]
            _config.experiments = {}
            _config.experiments.asyncWebAssembly = true
            _config.resolve = {}
            _config.resolve.fallback = { fs: false, path: false }
            return _config
        }
    }
}

exports.default = pluginContentWasm
