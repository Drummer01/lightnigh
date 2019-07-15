export interface Drawable {
    /**
     * Should render itself at canvas

     * @param context
     */
    draw(context: CanvasRenderingContext2D) : void;

    /**
     * Should update inner object properties
     * before rendering
     */
    update() : void;

    /**
     * Get drawable which should be drawn
     */
    getInnerDrawableObjects () : Drawable[];
}
