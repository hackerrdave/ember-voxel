/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-voxel',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/voxel.css/dist/voxel.css');
    this.app.import(app.bowerDirectory + '/voxel.css/dist/voxelcss.js');
    this.app.import('vendor/ember-voxel/shim.js', {
        type: 'vendor',
        exports: { 'voxelcss': ['default'] }
    });
  }
};
