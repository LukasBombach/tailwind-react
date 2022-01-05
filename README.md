# tailwind-react

Tailwind CSS-in-JS solution for react that provides a `styled-components api`

🏎 &nbsp; No runtime, zero-cost-abstraction

🔥 &nbsp; No tooling, setup or framework integration required, just import the npm package

🎨 &nbsp; Support for variants

🛠 &nbsp; Works with the official tailwind VSCode plugin

💪 &nbsp; Full TypeScript support

## Installation

```bash
npm i tailwind-react # yarn add tailwind-react
```

## Usage

```tsx
// components.tsx

import styled from "tailwind-react";

const Headline = styled.h1(`text-xl font-bold`);

const Link = styled.a(`text-m underline`);

const Button = styled.button<{ variant?: "primary" | "secondary" }>(
  ({ variant }) => `
  ${variant === "primary" ? "bg-sky-400" : "bg-gray-700"}
  ${variant === "primary" ? "text-white" : "text-gray-300"}
  text-sm
  font-semibold
  rounded-lg
);
```

## todos

- [ ] improve readme / docs
- [ ] infinite args
- [ ] get rid of shims in lib bundle
- [ ] benchmark proxy implementation, maybe cache generated fns?
- [ ] Unit test and stuff
- [ ] more examples
- [x] prevent prop passthrough, check bundle size, benchmark implementation
- [x] clean up messy lib src
- [x] rename to tailwind-react
