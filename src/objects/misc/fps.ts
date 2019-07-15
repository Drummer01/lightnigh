import {AbstractObject} from "../AbstractObject";

export class FpsObject extends AbstractObject {
    /**
     * The two d position on
     */
    protected x: number;
    protected y: number;

    /**
     * Time in milliseconds to last frame call
     */
    protected lastFrameCallTime: number;

    /**
     * Current fps
     */
    protected fps: number = 0;

    constructor (x: number, y: number) {
        super();

        this.x = x;
        this.y = y;

        this.lastFrameCallTime = performance.now();
    }

    draw (context: CanvasRenderingContext2D): void {
        context.font = "20px Georgia";
        context.fillStyle = '#ffffff';
        context.fillText(`FPS ${this.fps}`, this.x, this.y);
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
