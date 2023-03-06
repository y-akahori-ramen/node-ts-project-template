declare class Vector {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    static Add(a: Vector, b: Vector): Vector;
    toString(): string;
    equals(other: Vector): boolean;
}
export { Vector };
