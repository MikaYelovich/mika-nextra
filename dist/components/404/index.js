import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { H1 } from "../../mdx-components/heading";
import { NotFoundLink } from "./index.client";
const NotFoundPage = (t0) => {
  const $ = _c(11);
  const {
    content: t1,
    labels: t2,
    children,
    className
  } = t0;
  const content = t1 === void 0 ? "Submit an issue about broken link" : t1;
  const labels = t2 === void 0 ? "bug" : t2;
  let t3;
  if ($[0] !== className) {
    t3 = cn("x:flex x:flex-col x:justify-center x:items-center x:h-[calc(100dvh-var(--nextra-navbar-height))]", className);
    $[0] = className;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] !== children) {
    t4 = children || /* @__PURE__ */ jsx(H1, { children: "404: Page Not Found" });
    $[2] = children;
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] !== content || $[5] !== labels) {
    t5 = /* @__PURE__ */ jsx(NotFoundLink, { labels, children: content });
    $[4] = content;
    $[5] = labels;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] !== t3 || $[8] !== t4 || $[9] !== t5) {
    t6 = /* @__PURE__ */ jsxs("div", { className: t3, children: [
      t4,
      t5
    ] });
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  return t6;
};
export {
  NotFoundPage
};
