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
}
