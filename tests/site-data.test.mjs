import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const data = await readFile(new URL("../lib/site-data.ts", import.meta.url), "utf8");
const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

assert.match(data, /J&P Treinamentos/);
assert.match(data, /99229-9572/);
assert.doesNotMatch(home, /Lorem ipsum/i);
assert.doesNotMatch(home, /SkeletonPreview|codex-preview/);
