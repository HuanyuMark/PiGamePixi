<template>
  <canvos id="game-window"></canvos>
</template>

<script setup lang="ts">
import * as Phaser from 'phaser'
import { onMounted } from 'vue';
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
};



function preload() {
}

function create() {
}

function update() {
}

onMounted(() => {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    dom: {
      /**
 * Should the game create a div element to act as a DOM Container? Only enable if you're using DOM Element objects. You must provide a parent object if you use this feature.
 */
      createContainer: true,
      // /**
      //  * Should the DOM Container that is created (if `dom.createContainer` is true) be positioned behind (true) or over the top (false, the default) of the game canvas?
      //  */
      // behindCanvas?: boolean;
      /**
       * The default `pointerEvents` attribute set on the DOM Container.
       */
      pointerEvents: 'click',
    }
  });
})

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

canvas {
  width: 100%;
  height: 100vh;
  position: fixed;
}
</style>
