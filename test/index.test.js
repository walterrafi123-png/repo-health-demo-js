import assert from "node:assert/strict";
import test from "node:test";
import { greet } from "../src/index.js";

test("greets the default target", () => {
  assert.equal(greet(), "Hello, world!");
});

test("trims custom target names", () => {
  assert.equal(greet(" Radar "), "Hello, Radar!");
});

test("falls back when a blank target is provided", () => {
  assert.equal(greet("   "), "Hello, world!");
});
