# Angelica Polkadot Score Challenge

A coding challenge that involves parsing ASCII art to calculate a "polkadot score" based on the position of polkadots relative to Angelica's lips.

## The Challenge

Write a `computePolkadotScore` function that counts the number of polkadots (`O` characters) on Angelica's dress in the ASCII art.

**Special Rule:** Polkadots whose x-coordinate falls within the range of Angelica's lips are counted differently — they get multiplied by the number of characters used to represent her pupils.

### Formula

```
Polkadot Score = (Polkadots Outside Lips Range) + (Polkadots Inside Lips Range × Pupil Characters)
```

## Solution

### Key Elements Identified

| Element | Pattern | Location |
|---------|---------|----------|
| Pupils | `• ; •` | 2 characters (`•`) |
| Lips | `~~~~~~` | x = 32 to x = 37 |
| Polkadots | `O` | Scattered on the dress |

### Calculation

- **Polkadots outside lips range:** 31
- **Polkadots inside lips range:** 10
- **Pupil characters:** 2

```
Score = 31 + (10 × 2) = 51
```

## Answer

**51**

## How to Run

```bash
node computePolkadotScore.js
```

### Output

```
Lips range: x=32 to x=37
Pupil characters: 2
Polkadots outside: 31
Polkadots inside: 10
Formula: 31 + (10 * 2) = 51

*** POLKADOT SCORE: 51 ***
```

## How the Code Works

1. **Parse the ASCII art** line by line
2. **Find the pupils** by locating the `• ; •` pattern and counting the `•` characters (2 total)
3. **Find the lips** by locating the first `~~~~~~` pattern on Angelica's face and recording its x-coordinate range
4. **Count polkadots** by iterating through each character, checking if it's an `O`, and categorizing it as inside or outside the lips range based on its x-coordinate
5. **Apply the formula** to calculate the final score

## Tech Stack

- JavaScript (Node.js)

## Author

Zeel
