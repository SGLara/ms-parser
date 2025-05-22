# @sglara/ms-parser

A lightweight TypeScript package for parsing time durations into milliseconds. Supports both ESM and CommonJS modules.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- TypeScript support
- Zero dependencies
- Dual module support (ESM & CommonJS)
- Handles decimal values
- Supports combined durations
- Returns NaN for invalid input

## Installation

```bash
# Using npm
npm install @sglara/ms-parser

# Using yarn
yarn add @sglara/ms-parser

# Using pnpm
pnpm add @sglara/ms-parser
```

## Usage

### ESM (ECMAScript Modules)

```typescript
import { ms } from "@sglara/ms-parser";

// Parse single durations
ms("1m"); // 60000
ms("1.5h"); // 5400000

// Parse combined durations
ms("1h30m"); // 5400000
ms("2m15s"); // 135000

// Invalid input returns NaN
ms("abc"); // NaN
```

### CommonJS

```javascript
const { ms } = require("@sglara/ms-parser");

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

## TypeScript Support

The package includes TypeScript type definitions. No additional `@types` package is needed.

## Module Support

This package supports both ESM and CommonJS modules:

- ESM: `import { ms } from '@sglara/ms-parser'`
- CommonJS: `const { ms } = require('@sglara/ms-parser')`

The package will automatically use the correct module format based on your environment.

## Testing with Jest

If you're using Jest, make sure your `jest.config.js` includes:

```javascript
module.exports = {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
