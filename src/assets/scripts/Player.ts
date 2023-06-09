import { Container, DisplayObject } from "pixijs";

export class Player<T extends DisplayObject = DisplayObject> extends Container<T> {

    protected _hp: number = 0;

    constructor(hp: number = 0) {
        super();
        this._hp = hp;
    }

    get hp() {
        return this._hp;
    }

    isHitWith(other: Container): boolean {
        //Define the variables we'll need to calculate
        let hit: boolean, combinedHalfWidths: number, combinedHalfHeights: number, vx: number, vy: number;

        //hit will determine whether there's a collision
        hit = false;

        const r1 = {
            centerX: 0,
            centerY: 0,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            halfWidth: 0,
            halfHeight: 0,
        }

        const r2 = {
            centerX: 0,
            centerY: 0,
            x: other.x,
            y: other.y,
            width: other.width,
            height: other.height,
            halfWidth: 0,
            halfHeight: 0,
        }

        other.hitArea

        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;

        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;

        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {

                //There's definitely a collision happening
                hit = true;
            } else {

                //There's no collision on the y axis
                hit = false;
            }
        } else {
            //There's no collision on the x axis
            hit = false;
        }

        //`hit` will be either `true` or `false`
        return hit;
    }
}