/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-voxel',

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
