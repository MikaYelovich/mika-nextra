import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import cn from "clsx";
import { LocaleSwitch } from "../locale-switch";
import { ThemeSwitch } from "../theme-switch";
import { Switchers } from "./switchers";
const Footer = (t0) => {
  const $ = _c(12);
  let children;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  let t1;
  let t2;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(Switchers, { children: /* @__PURE__ */ jsxs("div", { className: "x:mx-auto x:flex x:max-w-(--nextra-content-width) x:gap-2 x:py-2 x:px-4", children: [
      /* @__PURE__ */ jsx(LocaleSwitch, {}),
      /* @__PURE__ */ jsx(ThemeSwitch, {})
    ] }) });
    t2 = /* @__PURE__ */ jsx("hr", { className: "nextra-border" });
    $[4] = t1;
    $[5] = t2;
  } else {
    t1 = $[4];
    t2 = $[5];
  }
  let t3;
  if ($[6] !== children || $[7] !== className || $[8] !== props) {
    t3 = children && /* @__PURE__ */ jsx("footer", { className: cn("x:mx-auto x:flex x:max-w-(--nextra-content-width) x:justify-center x:py-12 x:text-gray-600 x:dark:text-gray-400 x:md:justify-start", "x:pl-[max(env(safe-area-inset-left),1.5rem)] x:pr-[max(env(safe-area-inset-right),1.5rem)]", className), ...props, children });
    $[6] = children;
    $[7] = className;
    $[8] = props;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  let t4;
  if ($[10] !== t3) {
    t4 = /* @__PURE__ */ jsxs("div", { className: "x:pb-[env(safe-area-inset-bottom)] x:print:bg-transparent", children: [
      t1,
      t2,
      t3
    ] });
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
};
export {
  Footer
};
