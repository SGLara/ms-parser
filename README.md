# ms-parser

A lightweight TypeScript package for parsing time durations into milliseconds.

## Installation

```bash
npm install ms-parser
# or
yarn add ms-parser
# or
pnpm add ms-parser
```

## Usage

```typescript
import { ms } from "ms-parser";

// Parse single durations
ms("1m"); // 60000
ms("1.5h"); // 5400000

// Parse combined durations
ms("1h30m"); // 5400000
ms("2m15s"); // 135000

// Invalid input returns NaN
ms("abc"); // NaN
```

## Supported Units

- `ms` - milliseconds
- `s` - seconds
- `m` - minutes
- `h` - hours
- `d` - days

## Features

- TypeScript support
- Zero dependencies
- Handles decimal values
- Supports combined durations
- Returns NaN for invalid input

## License

MIT
