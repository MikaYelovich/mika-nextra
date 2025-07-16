import * as react from 'react';
import { FC, ReactNode } from 'react';
import { z } from 'zod';

declare const theme: z.ZodObject<{
    banner: z.ZodOptional<z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>>;
    darkMode: z.ZodDefault<z.ZodBoolean>;
    docsRepositoryBase: z.ZodDefault<z.ZodString>;
    editLink: z.ZodDefault<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>]>, z.ZodNull]>>;
    feedback: z.ZodDefault<z.ZodObject<{
        content: z.ZodDefault<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>]>, z.ZodNull]>>;
        labels: z.ZodDefault<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        content: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null;
        labels: string;
    }, {
        content?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null | undefined;
        labels?: string | undefined;
    }>>;
    footer: z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>;
    i18n: z.ZodDefault<z.ZodArray<z.ZodObject<{
        locale: z.ZodString;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        locale: string;
    }, {
        name: string;
        locale: string;
    }>, "many">>;
    lastUpdated: z.ZodEffects<z.ZodDefault<z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>>, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined>;
    navbar: z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>;
    navigation: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
        next: z.ZodBoolean;
        prev: z.ZodBoolean;
    }, "strict", z.ZodTypeAny, {
        next: boolean;
        prev: boolean;
    }, {
        next: boolean;
        prev: boolean;
    }>]>>, {
        next: boolean;
        prev: boolean;
    }, boolean | {
        next: boolean;
        prev: boolean;
    } | undefined>;
    nextThemes: z.ZodDefault<z.ZodObject<{
        attribute: z.ZodDefault<z.ZodUnion<[z.ZodType<`data-${string}` | "class", z.ZodTypeDef, `data-${string}` | "class">, z.ZodArray<z.ZodType<`data-${string}` | "class", z.ZodTypeDef, `data-${string}` | "class">, "many">]>>;
        defaultTheme: z.ZodOptional<z.ZodString>;
        disableTransitionOnChange: z.ZodDefault<z.ZodBoolean>;
        forcedTheme: z.ZodOptional<z.ZodString>;
        storageKey: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        attribute: `data-${string}` | "class" | (`data-${string}` | "class")[];
        disableTransitionOnChange: boolean;
        defaultTheme?: string | undefined;
        forcedTheme?: string | undefined;
        storageKey?: string | undefined;
    }, {
        attribute?: `data-${string}` | "class" | (`data-${string}` | "class")[] | undefined;
        defaultTheme?: string | undefined;
        disableTransitionOnChange?: boolean | undefined;
        forcedTheme?: string | undefined;
        storageKey?: string | undefined;
    }>>;
    pageMap: z.ZodArray<z.ZodAny, "many">;
    search: z.ZodDefault<z.ZodUnion<[z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>, z.ZodNull]>>;
    sidebar: z.ZodDefault<z.ZodObject<{
        autoCollapse: z.ZodOptional<z.ZodBoolean>;
        defaultMenuCollapseLevel: z.ZodDefault<z.ZodNumber>;
        defaultOpen: z.ZodDefault<z.ZodBoolean>;
        toggleButton: z.ZodDefault<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        defaultMenuCollapseLevel: number;
        defaultOpen: boolean;
        toggleButton: boolean;
        autoCollapse?: boolean | undefined;
    }, {
        autoCollapse?: boolean | undefined;
        defaultMenuCollapseLevel?: number | undefined;
        defaultOpen?: boolean | undefined;
        toggleButton?: boolean | undefined;
    }>>;
    themeSwitch: z.ZodDefault<z.ZodObject<{
        dark: z.ZodDefault<z.ZodString>;
        light: z.ZodDefault<z.ZodString>;
        system: z.ZodDefault<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        dark: string;
        light: string;
        system: string;
    }, {
        dark?: string | undefined;
        light?: string | undefined;
        system?: string | undefined;
    }>>;
    toc: z.ZodDefault<z.ZodObject<{
        backToTop: z.ZodDefault<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>]>, z.ZodNull]>>;
        extraContent: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>]>>;
        float: z.ZodDefault<z.ZodBoolean>;
        title: z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodType<react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>, z.ZodTypeDef, react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>>]>>;
    }, "strict", z.ZodTypeAny, {
        float: boolean;
        backToTop: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null;
        title: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
        extraContent?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    }, {
        float?: boolean | undefined;
        backToTop?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null | undefined;
        extraContent?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
        title?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    pageMap: any[];
    navbar: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    footer: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    search: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null;
    darkMode: boolean;
    docsRepositoryBase: string;
    editLink: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null;
    feedback: {
        content: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null;
        labels: string;
    };
    i18n: {
        name: string;
        locale: string;
    }[];
    lastUpdated: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    navigation: {
        next: boolean;
        prev: boolean;
    };
    nextThemes: {
        attribute: `data-${string}` | "class" | (`data-${string}` | "class")[];
        disableTransitionOnChange: boolean;
        defaultTheme?: string | undefined;
        forcedTheme?: string | undefined;
        storageKey?: string | undefined;
    };
    sidebar: {
        defaultMenuCollapseLevel: number;
        defaultOpen: boolean;
        toggleButton: boolean;
        autoCollapse?: boolean | undefined;
    };
    themeSwitch: {
        dark: string;
        light: string;
        system: string;
    };
    toc: {
        float: boolean;
        backToTop: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null;
        title: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
        extraContent?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    };
    banner?: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
}, {
    pageMap: any[];
    navbar: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    footer: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>>;
    search?: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null | undefined;
    banner?: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    darkMode?: boolean | undefined;
    docsRepositoryBase?: string | undefined;
    editLink?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null | undefined;
    feedback?: {
        content?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null | undefined;
        labels?: string | undefined;
    } | undefined;
    i18n?: {
        name: string;
        locale: string;
    }[] | undefined;
    lastUpdated?: react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    navigation?: boolean | {
        next: boolean;
        prev: boolean;
    } | undefined;
    nextThemes?: {
        attribute?: `data-${string}` | "class" | (`data-${string}` | "class")[] | undefined;
        defaultTheme?: string | undefined;
        disableTransitionOnChange?: boolean | undefined;
        forcedTheme?: string | undefined;
        storageKey?: string | undefined;
    } | undefined;
    sidebar?: {
        autoCollapse?: boolean | undefined;
        defaultMenuCollapseLevel?: number | undefined;
        defaultOpen?: boolean | undefined;
        toggleButton?: boolean | undefined;
    } | undefined;
    themeSwitch?: {
        dark?: string | undefined;
        light?: string | undefined;
        system?: string | undefined;
    } | undefined;
    toc?: {
        float?: boolean | undefined;
        backToTop?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | null | undefined;
        extraContent?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
        title?: string | react.ReactElement<Record<string, unknown>, string | react.JSXElementConstructor<any>> | undefined;
    } | undefined;
}>;
type ThemeConfigProps = z.infer<typeof theme>;
type LayoutProps = z.input<typeof theme> & {
    children: ReactNode;
};
declare const Layout: FC<LayoutProps>;

export { Layout, type ThemeConfigProps };
