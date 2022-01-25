# tailwind-react

> Tailwind CSS-in-JS solution for react that provides a `styled-components` api

🏎 &nbsp; No runtime, zero-cost-abstraction

🔥 &nbsp; No setup, tooling or special framework integration required, just import the npm package

🎨 &nbsp; Support for variants

🛠 &nbsp; Works with the official tailwind VSCode plugin

💪 &nbsp; Full TypeScript support

## Installation

[Install Tailwind CSS](https://tailwindcss.com/docs/installation) in your project and then run

```bash
npm i tailwind-react # yarn add tailwind-react
```

## Usage

**Create simple components with tailwind class names**

```tsx
import styled from "tailwind-react";

const SimpleButton = styled.button`text-sm text-gray-300 py-3 px-4 bg-gray-800 rounded-lg`;
```

**You can use multiple lines and spacing for readability**

```tsx
import styled from "tailwind-react";

const FancyButton = styled.button`
  text-white
  font-medium
  text-sm
  uppercase
  leading-snug

  py-4
  px-14
  bg-blue-600
  rounded-full
  shadow-md
  
  hover:bg-blue-700
  hover:shadow-lg

  active:bg-blue-800 
  active:shadow-lg

  focus:bg-blue-700
  focus:shadow-lg
  focus:outline-none
  focus:ring-0
`;
```

**Create variants by passing a function instead of a template string**

```tsx
import styled from "tailwind-react";

const Button = styled.button(
  props => `
  ${props.variant === "primary" ? "text-white bg-sky-400" : "text-gray-300 bg-gray-700"}
  text-sm
  font-semibold
  rounded-lg`
);
```

**There is full TypeScript support**

```tsx
import styled from "tailwind-react";

const Button = styled.button<{ variant?: "primary" }>(
  props => `
  ${props.variant === "primary" ? "text-white bg-sky-400" : "text-gray-300 bg-gray-700"}
  text-sm
  font-semibold
  rounded-lg`
);
```

_It's very simple, as things should be._

## Getting started

In this repo you will find many examples for using `tailwind-react` with various frameworks or for specific purposes

- **Next.js**<br />
  [examples/next](examples/next)

- **Component Library with Microbundle**<br />
  [examples/component-library](examples/component-library)
