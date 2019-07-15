import {Drawable} from "../contracts/drawable";

/**
 * Abstraction layer on drawer object
 */
export class AbstractObject implements Drawable {
    draw(context: CanvasRenderingContext2D): void {}

    update(): void {}

    /**
     * Get drawable which should be drawn
     */
    getInnerDrawableObjects () : Drawable[] {
        return [];
    }
}
