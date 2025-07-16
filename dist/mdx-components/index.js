"use no memo";
import { jsx, jsxs } from "react/jsx-runtime";
import cn from "clsx";
import { Callout, Code, Details, Pre, SkipNavContent, Summary, Table, withGitHubAlert, withIcons } from "nextra/components";
import { useMDXComponents as getNextraMDXComponents } from "nextra/mdx-components";
import { removeLinks } from "nextra/remove-links";
import { Sidebar } from "../components";
import { TOCProvider } from "../stores";
import { H1, H2, H3, H4, H5, H6 } from "./heading";
import { Link } from "./link";
import { ClientWrapper } from "./wrapper.client";
const Blockquote = (props) => /* @__PURE__ */ jsx("blockquote", { className: cn("x:not-first:mt-6 x:border-gray-300 x:italic x:text-gray-700 x:dark:border-gray-700 x:dark:text-gray-400", "x:border-s-2 x:ps-6"), ...props });
const DEFAULT_COMPONENTS = getNextraMDXComponents({
  a: Link,
  blockquote: withGitHubAlert(({
    type,
    ...props
  }) => {
    const calloutType = {
      caution: "error",
      important: "error",
      // TODO
      note: "info",
      tip: "default",
      warning: "warning"
    }[type];
    return /* @__PURE__ */ jsx(Callout, { type: calloutType, ...props });
  }, Blockquote),
  code: Code,
  details: Details,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: (props) => /* @__PURE__ */ jsx("hr", { className: "x:my-8 nextra-border", ...props }),
  li: (props) => /* @__PURE__ */ jsx("li", { className: "x:my-2", ...props }),
  ol: (props) => /* @__PURE__ */ jsx("ol", { className: "x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-decimal x:ms-6", ...props }),
  p: (props) => /* @__PURE__ */ jsx("p", { className: "x:not-first:mt-6 x:leading-7", ...props }),
  pre: withIcons(Pre),
  summary: Summary,
  table: ({
    className,
    ...props
  }) => /* @__PURE__ */ jsx(Table, { className: cn("nextra-scrollbar x:not-first:mt-6 x:p-0", className), ...props }),
  td: Table.Td,
  th: Table.Th,
  tr: Table.Tr,
  ul: (props) => /* @__PURE__ */ jsx("ul", { className: "x:[:is(ol,ul)_&]:my-3 x:not-first:mt-6 x:list-disc x:ms-6", ...props }),
  wrapper({
    toc,
    children,
    metadata,
    bottomContent,
    ...props
  }) {
    toc = toc.map((item) => ({
      ...item,
      value: removeLinks(item.value)
    }));
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "x:mx-auto x:flex x:max-w-(--nextra-content-width)",
        ...props,
        children: /* @__PURE__ */ jsxs(TOCProvider, { value: toc, children: [
          /* @__PURE__ */ jsx(Sidebar, {}),
          /* @__PURE__ */ jsxs(ClientWrapper, { metadata, bottomContent, children: [
            /* @__PURE__ */ jsx(SkipNavContent, {}),
            /* @__PURE__ */ jsx("main", { "data-pagefind-body": metadata.searchable !== false || void 0, children })
          ] })
        ] })
      }
    );
  }
});
const useMDXComponents = (components) => {
  return {
    ...DEFAULT_COMPONENTS,
    ...components
  };
};
export {
  useMDXComponents
};
