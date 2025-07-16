"use client";
import { jsx } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import { usePathname } from "next/navigation";
import { useMounted } from "nextra/hooks";
import { Link } from "../../mdx-components/link";
import { useThemeConfig } from "../../stores";
import { getGitIssueUrl } from "../../utils";
const NotFoundLink = (t0) => {
  const $ = _c(7);
  const {
    children,
    labels
  } = t0;
  const config = useThemeConfig();
  const pathname = usePathname();
  const mounted = useMounted();
  const ref = mounted && document.referrer;
  const referrer = ref ? ` from "${ref}"` : "";
  const t1 = `Found broken "${mounted ? pathname : ""}" link${referrer}. Please fix!`;
  let t2;
  if ($[0] !== config.docsRepositoryBase || $[1] !== labels || $[2] !== t1) {
    t2 = getGitIssueUrl({
      repository: config.docsRepositoryBase,
      title: t1,
      labels
    });
    $[0] = config.docsRepositoryBase;
    $[1] = labels;
    $[2] = t1;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== children || $[5] !== t2) {
    t3 = /* @__PURE__ */ jsx(Link, { className: "x:mt-6", href: t2, children });
    $[4] = children;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
};
export {
  NotFoundLink
};
