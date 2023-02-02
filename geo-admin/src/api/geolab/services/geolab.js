'use strict';

/**
 * geolab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::geolab.geolab');
