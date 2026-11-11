import { test } from "node:test";
import { soma } from "./soma.js";
import { assert } from "node:assert/strict";

test('soma de 1 e 1 para dar 2', () => {
    assert.equal(soma(1, 1), 2)
})