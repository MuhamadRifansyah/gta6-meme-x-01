// Entry program for gta6-meme-x-01 (Node 22, standard library only). The meme itself is the entry —
// it is posted on X, and this program's only job is to hand the house the post's address: it copies
// POST.json from the repository root into /output/POST.json, where the gate reads it. Nothing about
// the post is judged from what this program writes; the house reads the post from X itself.
//
// Local run (the grader's container uses /bot and /output instead of these two variables):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
