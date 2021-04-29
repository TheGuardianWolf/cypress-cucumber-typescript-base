// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// Types for this thing is broken
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

import resolve from 'resolve';

import { cypressConfigResolver } from '../config/cypress-config-resolver';

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// eslint-disable-next-line no-unused-vars
const plugins: Cypress.PluginConfig = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { basedir: config.projectRoot }),
  };

  on('file:preprocessor', cucumber(options));
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return cypressConfigResolver();
};

module.exports = plugins;
