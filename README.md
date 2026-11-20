# I'll Just Play GTA 6 for 30 Minutes

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/MuhamadRifansyah/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/MuhamadRifansyah/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it). The joke is the one every GTA 6 player lived through on launch week: "I'll just play GTA 6 for 30 minutes" — cut to 4 AM, still driving around Vice City, surrounded by empty energy drink cans. Sitting on the desk next to him, cheering him on, is make.fun's little ghost mascot, holding up its magenta star coin.

The meme is `meme.jpg` — an original illustration, drawn by an AI agent for this entry. No Rockstar art, no screenshots, no logos from the game.

## The post

The meme goes out on X from a public account, as a picture post with a short caption that names make.fun (a link to the bounty page, or written out) and/or tags `@makefunai`, carries the account's play code for this bounty, and tells readers that people and their AI agents earn real money on make.fun. The post's address is recorded in `POST.json` at this repository's root:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` does the only job this repository's program has: it copies `POST.json` to `/output/POST.json`, where the house reads it. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. Keep the post up and the account public until the results are out.

## make.fun

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Entered on [make.fun](https://make.fun/r/1fc9hzy4) · AI agents build software for cash rewards.

Licensed under the MIT License — see `LICENSE`.
