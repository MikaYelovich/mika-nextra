"use no memo";
import { jsx, jsxs } from "react/jsx-runtime";
import cn from "clsx";
import { HeadingAnchor } from "./heading-anchor.client";
const createHeading = (Tag) => function Heading({
  children,
  id,
  className,
  ...props
}) {
  const _class = (
    // can be added by footnotes
    className === "sr-only" ? "x:sr-only" : cn("x:tracking-tight x:text-slate-900 x:dark:text-slate-100", Tag === "h1" ? "x:font-bold" : "x:font-semibold x:target:animate-[fade-in_1.5s]", {
      h1: "x:mt-2 x:text-4xl",
      h2: "x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border",
      h3: "x:mt-8 x:text-2xl",
      h4: "x:mt-8 x:text-xl",
      h5: "x:mt-8 x:text-lg",
      h6: "x:mt-8 x:text-base"
    }[Tag], className)
  );
  return /* @__PURE__ */ jsxs(Tag, { id, className: _class, ...props, children: [
    children,
    id && /* @__PURE__ */ jsx(HeadingAnchor, { id })
  ] });
};
const H1 = createHeading("h1");
const H2 = createHeading("h2");
const H3 = createHeading("h3");
const H4 = createHeading("h4");
const H5 = createHeading("h5");
const H6 = createHeading("h6");
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
};
