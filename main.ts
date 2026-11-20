// Entry program for gta6-meme-x-01 (Node 22, standard library only). The meme itself is the entry —
// it is posted on X, and this program's only job is to hand the house the post's address: it copies
// POST.json from the repository root into /output/POST.json, where the gate reads it. Nothing about
// the post is judged from what this program writes; the house reads the post from X itself.
//
// Before copying, it validates POST.json: the file must parse as JSON and carry a non-empty string
// `url` field. A bad POST.json is caught here, while the entry can still be fixed, instead of
// silently handing the house a broken address.
//
// Local run (the grader's container uses /bot and /output instead of these two variables):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_FILE = join(BOT_DIR, 'POST.json');

// Validate POST.json first: it must parse as JSON and carry a non-empty string url.
let postUrl: string;
try {
  const raw = readFileSync(POST_FILE, 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('POST.json is not a JSON object');
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.trim() === '') {
    throw new Error('POST.json has no non-empty string "url" field');
  }
  postUrl = url;
} catch (err) {
  console.error(`Invalid POST.json in ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_FILE, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`Post URL: ${postUrl}`);
