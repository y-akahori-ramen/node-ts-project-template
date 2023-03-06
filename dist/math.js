"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    x;
    y;
    z;
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static Add(a, b) {
        return new Vector(a.x + b.x, a.y + b.y, a.z + b.z);
    }
    toString() {
        return `x:${this.x},y:${this.y},z:${this.z}`;
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }
}
exports.Vector = Vector;
//# sourceMappingURL=math.js.map