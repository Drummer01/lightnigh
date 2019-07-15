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
    draw (context: CanvasRenderingContext2D): void {
        context.clearRect(0, 0, this.width, this.height);

        context.fillStyle = '#111111';
        context.fillRect(0, 0, this.width, this.height);

        this.objects.map(x => this.recursiveDraw(context, x))
    }

    /**
     * Recursively draw objects
     *
     * @param context
     * @param object
     */
    recursiveDraw (context: CanvasRenderingContext2D, object: Drawable) {
        object.draw(context);

        object.getInnerDrawableObjects().map(x => this.recursiveDraw(context, x))
    }

    /**
     * Recursively update objects
     *
     * @param object
     */
    recursiveUpdate(object: Drawable) {
        object.update();

        object.getInnerDrawableObjects().map(x => this.recursiveUpdate(x))
    }

    /**
     * Update all inner objects
     */
    update (): void {
        this.objects.forEach(x => this.recursiveUpdate(x))
    }

    /**
     *
     * @param object
     */
    add (object: Drawable) : void {
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

    getInnerDrawableObjects(): Drawable[] {
        return [];
    }
}
