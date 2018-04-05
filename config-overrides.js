const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', [{ libraryName: 'antd', style: 'css' }, { libraryName: 'antd-mobile', style: 'css' }]], config);
    console.log(config)
    return config;
};