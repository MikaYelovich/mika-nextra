import * as react from 'react';
import { ComponentProps } from 'react';
import { Heading } from 'nextra';

declare const TOCContext: react.Context<Heading[]>;
declare const useTOC: () => Heading[];
declare const TOCProvider: (props: ComponentProps<typeof TOCContext.Provider>) => react.FunctionComponentElement<react.ProviderProps<Heading[]>>;

export { TOCProvider, useTOC };
