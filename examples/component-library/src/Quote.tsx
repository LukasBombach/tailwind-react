import styled from "tailwind-react";

import type { VFC } from "react";

const Figure = styled.figure`md:flex bg-white rounded-lg shadow-xl text-slate-900 overflow-hidden p-8 md:p-0 dark:bg-slate-800`;
const Img = styled.img`w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover`;
const Contents = styled.div`pt-6 md:p-8 text-center md:text-left space-y-4`;
const Text = styled.div`text-lg`;
const Name = styled.figcaption`text-sky-500 dark:text-sky-400`;
const JobTitle = styled.figcaption`text-slate-700 dark:text-slate-500`;

export const Quote: VFC = () => (
  <Figure>
    <Img
      src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
      alt=""
      width="384"
      height="512"
    />
    <Contents>
      <blockquote>
        <Text>
          “Tailwind CSS is the only framework that I&apos;ve seen scale on large teams. It&apos;s easy to customize,
          adapts to any design, and the build size is tiny.”
        </Text>
      </blockquote>
      <figcaption>
        <Name>Sarah Dayan</Name>
        <JobTitle>Staff Engineer, Algolia</JobTitle>
      </figcaption>
    </Contents>
  </Figure>
);
