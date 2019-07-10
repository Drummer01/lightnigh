import {Drawable} from "./contracts/drawable";

/**
 * Holds objects update them and draw them
 */
export class World implements Drawable {
    /**
     * An array of objects to be drawn
     */
    objects: Drawable[];

    constructor () {
        this.objects = [];
    }

    /**
     * Draw all inner objects
     */
    draw(): void {
        this.objects.forEach(x => x.draw())
    }

    /**
     * Update all inner objects
     */
    update(): void {
        this.objects.forEach(x => x.update())
    }
}
