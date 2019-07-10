import {World} from "./world";

const canvas = <HTMLCanvasElement>document.getElementById('canvas');

const context = <CanvasRenderingContext2D>canvas.getContext('2d');

const world : World = new World();

const loop = () => {
  world.update();

  world.draw();

  window.requestAnimationFrame(loop)
};


// Start the show
loop();
