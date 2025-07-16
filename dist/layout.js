import { jsx, jsxs } from "react/jsx-runtime";
import { c as _c } from "react-compiler-runtime";
import { ThemeProvider } from "next-themes";
import { Search, SkipNavLink } from "nextra/components";
import { element, stringOrElement } from "nextra/schemas";
import { Fragment } from "react";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { LastUpdated } from "./components/last-updated";
import { MobileNav } from "./components/sidebar";
import { ConfigProvider, ThemeConfigProvider } from "./stores";
const attributeSchema = z.custom((value) => value === "class" || value.startsWith("data-"));
const theme = z.strictObject({
  banner: element.optional(),
  darkMode: z.boolean().default(true),
  docsRepositoryBase: z.string().startsWith("https://").default("https://github.com/shuding/nextra"),
  editLink: stringOrElement.or(z.null()).default("Edit this page"),
  feedback: z.strictObject({
    content: stringOrElement.or(z.null()).default("Question? Give us feedback"),
    labels: z.string().default("feedback")
  }).default({}),
  footer: element,
  i18n: z.array(z.strictObject({
    locale: z.string(),
    name: z.string()
  })).default([]),
  lastUpdated: element.default(/* @__PURE__ */ jsx(LastUpdated, {})).refine((el) => el.type !== Fragment && typeof el.type !== "string", {
    message: `\`Layout#lastUpdated\` must be a \`<LastUpdated />\` component:

\`\`\`js
import { Layout, LastUpdated } from 'nextra-theme-docs'

<Layout
  lastUpdated={<LastUpdated locale="YOUR_LOCALE">YOUR_CONTENT</LastUpdated>}
>
  {children}
</Layout>
\`\`\`
`
  }),
  navbar: element,
  navigation: z.union([z.boolean(), z.strictObject({
    next: z.boolean(),
    prev: z.boolean()
  })]).default(true).transform((v) => typeof v === "boolean" ? {
    next: v,
    prev: v
  } : v),
  nextThemes: z.strictObject({
    attribute: z.union([attributeSchema, z.array(attributeSchema)]).default("class"),
    defaultTheme: z.string().optional(),
    disableTransitionOnChange: z.boolean().default(true),
    forcedTheme: z.string().optional(),
    storageKey: z.string().optional()
  }).default({}),
  pageMap: z.array(z.any({})),
  search: z.union([element, z.null()]).default(/* @__PURE__ */ jsx(Search, {})),
  sidebar: z.strictObject({
    autoCollapse: z.boolean().optional(),
    defaultMenuCollapseLevel: z.number().min(1).int().default(2),
    defaultOpen: z.boolean().default(true),
    toggleButton: z.boolean().default(true)
  }).default({}),
  themeSwitch: z.strictObject({
    dark: z.string().default("Dark"),
    light: z.string().default("Light"),
    system: z.string().default("System")
  }).default({}),
  toc: z.strictObject({
    backToTop: stringOrElement.or(z.null()).default("Scroll to top"),
    extraContent: stringOrElement.optional(),
    float: z.boolean().default(true),
    title: stringOrElement.default("On This Page")
  }).default({})
});
const Layout = (t0) => {
  const $ = _c(26);
  let children;
  let themeConfig;
  if ($[0] !== t0) {
    ({
      children,
      ...themeConfig
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = themeConfig;
  } else {
    children = $[1];
    themeConfig = $[2];
  }
  let data;
  if ($[3] !== themeConfig) {
    const {
      data: t12,
      error
    } = theme.safeParse(themeConfig);
    data = t12;
    if (error) {
      throw fromZodError(error);
    }
    $[3] = themeConfig;
    $[4] = data;
  } else {
    data = $[4];
  }
  let banner;
  let footer;
  let navbar;
  let nextThemes;
  let pageMap;
  let rest;
  if ($[5] !== data) {
    ({
      footer,
      navbar,
      pageMap,
      nextThemes,
      banner,
      ...rest
    } = data);
    $[5] = data;
    $[6] = banner;
    $[7] = footer;
    $[8] = navbar;
    $[9] = nextThemes;
    $[10] = pageMap;
    $[11] = rest;
  } else {
    banner = $[6];
    footer = $[7];
    navbar = $[8];
    nextThemes = $[9];
    pageMap = $[10];
    rest = $[11];
  }
  let t1;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(SkipNavLink, {});
    $[12] = t1;
  } else {
    t1 = $[12];
  }
  let t2;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(MobileNav, {});
    $[13] = t2;
  } else {
    t2 = $[13];
  }
  let t3;
  if ($[14] !== children || $[15] !== footer || $[16] !== navbar || $[17] !== pageMap) {
    t3 = /* @__PURE__ */ jsxs(ConfigProvider, { pageMap, navbar, footer, children: [
      t2,
      children
    ] });
    $[14] = children;
    $[15] = footer;
    $[16] = navbar;
    $[17] = pageMap;
    $[18] = t3;
  } else {
    t3 = $[18];
  }
  let t4;
  if ($[19] !== banner || $[20] !== nextThemes || $[21] !== t3) {
    t4 = /* @__PURE__ */ jsxs(ThemeProvider, { ...nextThemes, children: [
      t1,
      banner,
      t3
    ] });
    $[19] = banner;
    $[20] = nextThemes;
    $[21] = t3;
    $[22] = t4;
  } else {
    t4 = $[22];
  }
  let t5;
  if ($[23] !== rest || $[24] !== t4) {
    t5 = /* @__PURE__ */ jsx(ThemeConfigProvider, { value: rest, children: t4 });
    $[23] = rest;
    $[24] = t4;
    $[25] = t5;
  } else {
    t5 = $[25];
  }
  return t5;
};
export {
  Layout
};
