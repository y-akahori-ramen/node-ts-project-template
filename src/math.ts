class Vector {
  x: number
  y: number
  z: number

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static Add(a: Vector, b: Vector): Vector {
    return new Vector(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  toString(): string {
    return `x:${this.x},y:${this.y},z:${this.z}`;
  }

  equals(other: Vector): boolean {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }
}

export { Vector }
