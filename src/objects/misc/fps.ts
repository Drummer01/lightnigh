import {AbstractObject} from "../AbstractObject";

export class FpsObject extends AbstractObject {
    /**
     * The two d position on
     */
    x: number;
    y: number;

    /**
     * Time in milliseconds to last frame call
     */
    lastFrameCallTime: number;

    /**
     * Current fps
     */
    fps: number = 0;

    constructor (x: number, y: number) {
        super();

        this.x = x;
        this.y = y;

        this.lastFrameCallTime = performance.now();
    }

    draw (): void {
        this.context.font = "20px Georgia";
        this.context.fillText(`FPS ${this.fps}`, this.x, this.y);
    }

    /**
     * Update fps value
     */
    update (): void {
        const current = performance.now();

        const diff = (current - this.lastFrameCallTime) / 1000;

        this.fps = Math.round(1 / diff);

        this.lastFrameCallTime = current;
    }

    /**
     * Get current fps
     */
    getFps () : number {
        return this.fps;
    }
}
