import {AbstractObject} from "../AbstractObject";
import {BoltObject} from "./bolt";
import {Vector2} from "../../helpers/vector2";

export class BoltSegment extends AbstractObject {
    protected bolt: BoltObject;

    protected position: Vector2;

    constructor (bolt: BoltObject, position: Vector2) {
        super();

        this.bolt = bolt;

        this.position = position;
    }

    draw (context: CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x + 10, this.position.y + 10);
        context.stroke();
    }
}
