import {AbstractObject} from "../AbstractObject";
import {LightningObject} from "./lightning";
import {Vector2} from "../../helpers/vector2";
import {random} from "../../helpers/utils";

export class BoltObject extends AbstractObject {
    /**
     * The lighting, it is parent object to bold
     */
    protected lightning: LightningObject;

    /**
     * An array of Vec2 points
     * those are points which
     * set where bolt "breaks"
     */
    protected segments: Vector2[] = [];

    /**
     * The initial/starting position of bold
     */
    protected initialPosition: Vector2;

    /**
     * The position which always changes
     * basically it moves with tick
     */
    protected reactivePosition: Vector2;

    /**
     * The velocity vector. Basically
     * tells bolt where to move
     */
    protected velocity: Vector2;

    /**
     * The max length of segment
     * after it is reached the bolt
     * will break with new velocity
     * vector angle
     */
    protected maxSegmentLength : number;

    /**
     * Max segments of this bold
     */
    protected maxSegmentsCount: number = 10;

    /**
     * The probability of bolt expansion
     * from 0 to 100
     */
    protected boltExpandProbability: number = 25;

    /**
     * Maximum number of bolt expansions
     */
    protected maxExpansions: number = 1;

    /**
     * Current expansion count
     */
    protected expansionsCount: number = 0;

    /**
     * The bolt generation
     */
    protected generation: number;

    /**
     * The index of generation
     * when expanding is not possible
     */
    protected generationThreshold: number = 1;

    /**
     * Constructor
     *
     * @param lightning
     * @param initialPosition
     * @param generation
     * @param velocityAngleOffset
     */
    constructor (lightning: LightningObject, initialPosition: Vector2, generation: number, velocityAngleOffset: number = 0) {
        super();

        this.lightning = lightning;

        this.initialPosition = initialPosition;

        this.reactivePosition = initialPosition.clone();

        this.segments.push(this.initialPosition);

        /*
         * Velocity vector of bolt
         */
        this.velocity = new Vector2(0, 0);
        this.velocity.setLength(40);
        this.velocity.setAngle(random((Math.PI + velocityAngleOffset) * 0.2, (Math.PI + velocityAngleOffset) * 0.8));

        this.maxSegmentLength = random(30, 70);

        this.maxSegmentsCount = random(5 - generation * 2, 10 - generation * 2);

        this.generation = generation;
    }

    draw (context: CanvasRenderingContext2D) {
        this.drawSegments(context);
    }

    update () {
        if (this.segments.length > this.maxSegmentsCount) {
            return;
        }

        this.reactivePosition.add(this.velocity);

        if (this.reactiveSegmentLength > this.maxSegmentLength) {
            this.segments.push(this.reactivePosition.clone());

            this.velocity.setAngle(random(Math.PI * 0.2, Math.PI * 0.8));

            this.maxSegmentLength = random(30, 70);
        }

        const canExpand = random(0, 100) <= this.boltExpandProbability &&
            this.expansionsCount <= this.maxExpansions &&
            this.generation <= this.generationThreshold;

        if (canExpand) {
            this.expansionsCount++;
            this.lightning.createBolt(this.reactivePosition.clone(), this.generation++, this.velocity.getAngle());
        }
    }

    /**
     * Getter for reactive segment length
     */
    public get reactiveSegmentLength () {
        return this.getSegmentLength(this.segments[this.segments.length - 1], this.reactivePosition)
    }

    /**
     * Calculates distance of segment
     *
     * @param startOfSegment
     * @param endOfSegment
     */
    protected getSegmentLength(startOfSegment: Vector2, endOfSegment: Vector2) : number {
        const dx = startOfSegment.x - endOfSegment.x;
        const dy = startOfSegment.y - endOfSegment.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Draw bolt segments
     *
     * @param context
     */
    protected drawSegments (context: CanvasRenderingContext2D) : void {
        context.lineWidth = 3;
        context.lineJoin = 'round';
        context.shadowColor = '#888888';
        context.shadowBlur = 6;

        context.beginPath();

        context.moveTo(this.initialPosition.x, this.initialPosition.y);

        for (let segment of this.segments) {
            context.lineTo(segment.x, segment.y);
        }

        context.lineTo(this.reactivePosition.x, this.reactivePosition.y);

        context.strokeStyle = '#FFEBDE';
        context.stroke();
    }
}
