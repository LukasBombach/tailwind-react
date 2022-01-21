# tailwind-react

> Tailwind CSS-in-JS solution for react that provides a `styled-components` api

🏎 &nbsp; No runtime, zero-cost-abstraction

🔥 &nbsp; No tooling, setup or special framework integration required, just import the npm package

🎨 &nbsp; Support for variants

🛠 &nbsp; Works with the official tailwind VSCode plugin

💪 &nbsp; Full TypeScript support

## Installation

[Install Tailwind CSS](https://tailwindcss.com/docs/installation) in your project and then run

```bash
npm i tailwind-react # yarn add tailwind-react
```

## Usage

```tsx
// components.tsx

import styled from "tailwind-react";

const Headline = styled.h1`text-xl font-bold`;

const Link = styled.a`text-m underline`;

const Button = styled.button<{ variant?: "primary" | "secondary" }>(
  ({ variant }) => `
  ${variant === "primary" ? "text-white bg-sky-400" : "text-gray-300 bg-gray-700"}
  text-sm
  font-semibold
  rounded-lg
);
```

That's it, really ✌️

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
