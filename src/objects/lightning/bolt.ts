import {AbstractObject} from "../AbstractObject";
import {LightningObject} from "./lightning";
import {BoltSegment} from "./bolt-segment";
import {Vector2} from "../../helpers/vector2";
import {Drawable} from "../../contracts/drawable";
import {random} from "../../helpers/utils";

export class BoltObject extends AbstractObject {
    protected lightning: LightningObject;

    protected strength: number = 100;

    protected segments: BoltSegment[] = [];

    protected topPosition: Vector2;
    protected bottomPosition: Vector2;

    constructor (lightning: LightningObject, strength: number) {
        super();

        this.lightning = lightning;

        this.strength = strength;

        this.topPosition = lightning.getPosition();
        this.bottomPosition = new Vector2(random(this.topPosition.x - 20, this.topPosition.x + 20), 300)
    }

    draw (context: CanvasRenderingContext2D) {
        context.strokeStyle = '#F6F7EB';
        context.moveTo(this.topPosition.x, this.topPosition.y);
        context.lineTo(this.bottomPosition.x, this.bottomPosition.y);
        context.stroke();
    }

    update () {
        this.strength -= 0.2;
    }

    getInnerDrawableObjects () : Drawable[] {
        return this.segments;
    }
}
