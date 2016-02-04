import Ember from 'ember';
import voxelcss from 'voxelcss';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['voxelCanvas'],
    attributeBindings: ['style'],

    style: Ember.computed('height', 'width', 'border', function(){
      const height  = this.get('height') || 500;
      const width   = this.get('width') || 500;
      const border  = this.get('border');

      return `height: ${height}px;
              width: ${width}px;
              border: ${border};
              position: relative;`;
    }),

    didInsertElement: function(){
      var scene = new voxelcss.Scene();
      scene.rotate(-Math.PI / 8, Math.PI / 4, 0);
      scene.attach(this.element);

      var lightSource = new voxelcss.LightSource(300, 300, 300, 750, 0.3, 1);
      scene.addLightSource(lightSource);

      var worldName   = this.get('world');
      var world       = new voxelcss.World(scene, worldName);
      var editor      = new voxelcss.Editor(world);

      editor.enableAutoSave();
      editor.load();
      if (world.getVoxels().length === 0) {
        editor.add(new voxelcss.Voxel(0, 0, 0, 100, {
          mesh: voxelcss.Meshes.grass
        }));
      }
    },
});
