import {World} from "./world";
import {FpsObject} from "./objects/misc/fps";

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = <CanvasRenderingContext2D>canvas.getContext('2d');

const world : World = new World(context, canvas.width, canvas.height);

world.add(new FpsObject(2, 20));

const loop = () => {
  world.update();

  world.draw();

  window.requestAnimationFrame(loop)
};


// Start the show
loop();
