export interface Drawable {
    /**
     * Should render itself at canvas
     */
    draw() : void;

    /**
     * Should update inner object properties
     * before rendering
     */
    update() : void;

    /**
     * Should set new rendering context
     *
     * @param context
     */
    setContext(context: CanvasRenderingContext2D) : void;
}
