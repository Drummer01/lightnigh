import {Drawable} from "./contracts/drawable";

/**
 * Holds objects update them and draw them
 */
export class World implements Drawable {
    /**
     * An array of objects to be drawn
     */
    objects: Drawable[];

    context!: CanvasRenderingContext2D;

    width: number;

    height: number;

    constructor (context: CanvasRenderingContext2D, width: number, height: number) {
        this.objects = [];

        this.width = width;
        this.height = height;

        this.setContext(context);
    }

    /**
     * Draw all inner objects
     */
    draw(): void {
        this.context.clearRect(0, 0, this.width, this.height);

        this.objects.forEach(x => x.draw())
    }

    /**
     * Update all inner objects
     */
    update(): void {
        this.objects.forEach(x => x.update())
    }

    /**
     *
     * @param object
     */
    add (object: Drawable) : void {
        object.setContext(this.context);

        this.objects.push(object);
    }

    /**
     * Set context
     *
     * @param context
     */
    setContext(context: CanvasRenderingContext2D): void {
        this.context = context;
    }
}
