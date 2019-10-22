import {AbstractObject} from "../AbstractObject";
import {BoltObject} from "./bolt";
import {Drawable} from "../../contracts/drawable";
import {Vector2} from "../../helpers/vector2";

export class LightningObject extends AbstractObject {

    /**
     * The strength of lightning
     */
    protected strength: number = 100;

    /**
     * The lightning bolts
     */
    protected bolts: BoltObject[] = [];

    /**
     * The initial strike position
     */
    protected position: Vector2;

    constructor (x: number, y: number) {
        super();

        this.position = new Vector2(x, y);

        this.createBolt(this.position.clone());
    }

    /**
     * Draw the lighting
     */
    draw () {

    }

    update () {

    }

    getInnerDrawableObjects () : Drawable[] {
        return this.bolts;
    }

    getPosition () : Vector2 {
        return this.position;
    }

    /**
     * Create new bolt at certain position
     *
     * @param position
     * @param generation
     * @param angleOffset
     */
    public createBolt (position: Vector2, generation: number = 0, angleOffset: number = 0) : void {
        this.bolts.push(new BoltObject(this, position, generation, angleOffset));
    }
}
