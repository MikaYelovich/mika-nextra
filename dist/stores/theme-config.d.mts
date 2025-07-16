import * as react from 'react';
import { ComponentProps } from 'react';

declare const ThemeConfigContext: react.Context<Omit<{
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
}, "pageMap" | "navbar" | "footer" | "banner" | "nextThemes">>;
declare const useThemeConfig: () => Omit<{
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
}, "pageMap" | "navbar" | "footer" | "banner" | "nextThemes">;
declare const ThemeConfigProvider: (props: ComponentProps<typeof ThemeConfigContext.Provider>) => react.FunctionComponentElement<react.ProviderProps<Omit<{
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
}, "pageMap" | "navbar" | "footer" | "banner" | "nextThemes">>>;

export { ThemeConfigProvider, useThemeConfig };
