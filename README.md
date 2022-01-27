# `tailwind-react`

<br />

**Tailwind CSS-in-JS solution without any downsides**

<br />

🏎 &nbsp; No runtime, zero-cost-abstraction

💆‍♀️ &nbsp; No setup, tooling or framework integration required, just import the npm package

🎨 &nbsp; Support for variants

🛠 &nbsp; Works with the official tailwind VSCode plugin

💪 &nbsp; Full TypeScript support

<br />

## Example

<img src="https://github.com/LukasBombach/tailwind-react/raw/master/docs/get_started_button.png" height="48" />

Render this button like so ↓

```tsx
import styled from "tailwind-react";

const Button = styled.button`
  text-white
  font-semibold
  bg-slate-900

  h-12
  px-6
  w-full

  rounded-lg`;

const GetStarted = () => <Button>Get Started</Button>;
```

<br />

## Installation

[Install Tailwind CSS](https://tailwindcss.com/docs/installation) in your project and then run

```bash
npm i tailwind-react # yarn add tailwind-react
```

<br />

## Usage

**Create simple components with tailwind class names**

```tsx
import styled from "tailwind-react";

const SimpleButton = styled.button`text-sm text-gray-300 py-3 px-4 bg-gray-800 rounded-lg`;
```

<br />

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

<br />

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

const GetStarted = () => <Button variant="primary">Get Started</Button>;
```

<br />

**There is full TypeScript support**

```tsx
import styled from "tailwind-react";

const Button = styled.button<{ variant?: "primary" }>(
  props => `
  ${props.variant === "foobar" ? "text-white bg-sky-400" : "text-gray-300 bg-gray-700"}
                       ^^^^^^ nope
  text-sm
  font-semibold
  rounded-lg`
);

const GetStarted = () => <Button variant="foobar">Get Started</Button>;
//                                        ^^^^^^ also nope
```

<br />

## Getting started

In this repo you will find many examples for using `tailwind-react` with various frameworks or for specific purposes

- **Next.js**<br />
  [examples/next](examples/next)

- **Create React App** `todo`<br />
  [examples/create-react-app](examples/create-react-app)

- **Gatsby** `todo`<br />
  [examples/gatsby](examples/gatsby)

- **Storybook** `todo`<br />
  [examples/storybook](examples/storybook)

- **Component Library with Microbundle**<br />
  [examples/component-library](examples/component-library)

- **Preact** `todo`<br />
  [examples/preact](examples/preact)
