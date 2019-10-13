const { setWorldConstructor } = require("cucumber");
// requires
const _ = require('lodash');

// module variables
const config = require('../../src/configs/config.json');
const envVariableConfig = require('../../src/configs/envVariableConfig.js');
const defaultConfig = config.default;
const environment = process.env.NODE_ENV || 'default';
const environmentConfig = config[environment];
const mergedConfig = _.merge(defaultConfig, environmentConfig);
const finalConfig = _.merge(mergedConfig, envVariableConfig)

class CustomWorld {
  constructor() {
    this.appConfig = finalConfig
  }
}

setWorldConstructor(CustomWorld);
