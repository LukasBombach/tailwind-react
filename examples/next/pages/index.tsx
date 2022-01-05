import type { NextPage } from "next";
import styled from "tailwind-react";

const Headline = styled.h1(() => `text-xl font-bold`);

const Link = styled.a(() => `text-m underline`);

const Button = styled.button<{ variant?: "primary" | "secondary" }>(
  ({ variant }) => `
  text-sm
  font-semibold
  ${variant === "primary" ? "bg-sky-400" : "bg-gray-800"}
  text-gray-300
  py-3
  px-4
  rounded-lg
  hover:bg-gray-700
  focus:outline-none
  focus-visible:ring-2
  focus-visible:ring-gray-700
  focus-visible:ring-offset-2
  focus-visible:ring-offset-gray-900`
);

const Home: NextPage = () => {
  return (
    <main>
      <Headline>Headline</Headline>
      <Link href="/">Link</Link>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button>Default Button</Button>
    </main>
  );
};

export default Home;
