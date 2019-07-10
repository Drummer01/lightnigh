import {Drawable} from "../contracts/drawable";

/**
 * Abstraction layer on drawer object
 */
export class AbstractObject implements Drawable {
    context!: CanvasRenderingContext2D;

    setContext (ctx: CanvasRenderingContext2D) : void {
        this.context = ctx;
    }

    getContext () : CanvasRenderingContext2D {
        return this.context;
    }

    draw(): void {}

    update(): void {}
}
