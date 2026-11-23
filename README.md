# One Line, Zero Use: The Useless Superpower Sprint

[![Bounty](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/yannyonn94/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/yannyonn94/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)

## The concept

The ultimate superpower, made perfectly useless: teleportation that only ever
takes you back to where you already were — and only when no one, not even you,
is watching. The joke pays off in the last two words.

## The line

> I can teleport anywhere on Earth in a blink, silently and for free — but only to the exact spot I was standing three seconds ago, and only when absolutely nobody is watching, including me.

(188 characters, one line.)

## Why this line

- **Names a hilariously useless superpower:** teleportation — the dream power —
  that can only return you to the spot you were standing three seconds ago.
- **Payoff in the last few words:** "including me" — the power even hides from
  its own owner, so it can never be used, shown off, or even confirmed.
- **Fresh angle:** instead of a weak power, it takes the strongest power and
  cancels it with its own conditions.
- **Tight wording:** one sentence, 188 characters, every clause adds a new
  restriction (anywhere, silently, for free — then: same spot, three seconds,
  nobody watching).
- **Specific and easy to picture:** an exact spot, three seconds, nobody
  watching — you can see the hero blinking and ending up exactly where they
  started.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that one line to
`/output/entry.txt`, creating `/output` if needed. It validates the line first:
1–200 characters, a single line, not only whitespace, and valid UTF-8 —
exiting non-zero if any check fails.

Run it:

```sh
node main.ts
```

Then check the result:

```sh
cat /output/entry.txt
```
