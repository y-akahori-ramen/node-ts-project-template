import { test, expect } from '@jest/globals';
import { Vector } from './math'

test("test Vector", () => {
  const result = Vector.Add(new Vector(1, 2, 3), new Vector(10, 20, 30));
  expect(result.equals(new Vector(11, 22, 33))).toBe(true);
});
