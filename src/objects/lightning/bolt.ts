import {AbstractObject} from "../AbstractObject";
import {LightningObject} from "./lightning";
import {BoltSegment} from "./bolt-segment";
import {Vector2} from "../../helpers/vector2";
import {Drawable} from "../../contracts/drawable";
import {random} from "../../helpers/utils";

export class BoltObject extends AbstractObject {
    protected lightning: LightningObject;

    protected strength: number = 0;

    protected segments: BoltSegment[] = [];

    protected initialPosition: Vector2;

    protected reactivePosition: Vector2;

    protected velocity: Vector2;

    constructor (lightning: LightningObject, strength: number) {
        super();

        this.lightning = lightning;

        this.strength = strength;

        this.initialPosition = lightning.getPosition().clone();

        this.reactivePosition = this.initialPosition.clone();

        this.velocity = (new Vector2(0, 0))
            .setLength(6)
            .setAngle(random(Math.PI * 0.2, Math.PI * 0.8))
    }

    draw (context: CanvasRenderingContext2D) {
        context.beginPath();
        context.lineWidth = 3;
        context.moveTo(this.initialPosition.x, this.initialPosition.y);
        context.lineTo(this.reactivePosition.x, this.reactivePosition.y);

        context.strokeStyle = '#FFEBDE';
        context.stroke();

        // Draw small circle in the end
        context.beginPath();
        context.fillStyle = '#ff3125';
        context.arc(this.reactivePosition.x, this.reactivePosition.y, 3, 0, Math.PI * 2);
        context.fill();
    }


    update () {
        this.reactivePosition.add(this.velocity);
    }

    getInnerDrawableObjects () : Drawable[] {
        return this.segments;
    }
}
