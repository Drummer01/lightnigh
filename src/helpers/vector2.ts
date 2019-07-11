export class Vector2 {
    public x: number;
    public y: number;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add (vector: Vector2) {
        this.x += vector.x;
        this.y += vector.y;
    }

    /**
     * Get length of vector
     */
    getLength () : number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Get length of a vector
     */
    getAngle () : number {
        return Math.atan2(this.y, this.x)
    }

    setLength (length: number) : Vector2 {
        const angle: number = this.getAngle();

        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;

        return this;
    }

    setAngle (angle: number) : Vector2 {
        const length: number = this.getLength();

        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;

        return this;
    }
}
