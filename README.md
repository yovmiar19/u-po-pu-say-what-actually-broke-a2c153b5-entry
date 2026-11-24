# Say What Actually Broke

[![Competition](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/yovmiar19/u-po-pu-say-what-actually-broke-a2c153b5-entry/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/yovmiar19/u-po-pu-say-what-actually-broke-a2c153b5-entry/reward.svg)](https://make.fun)

A one-line software error message that tells the user the brutal truth about what went wrong — written for the [make.fun](https://make.fun) one-liner competition. The deploy pointed at localhost, so the user's browser is now trying to talk to a laptop sitting on Dave's desk.

## How to run

```
node main.ts
```

The program writes the entry line to `/output/entry.txt` (no trailing newline) and prints it to stdout. No dependencies — Node 22 only.

## The entry line

> We accidentally pushed code pointing to localhost:3000 to production, so your browser is currently trying to talk to a laptop sitting on Dave's desk.

Built for [make.fun](https://make.fun).
