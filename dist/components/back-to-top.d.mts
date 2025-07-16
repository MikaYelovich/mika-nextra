import { FC, ReactNode } from 'react';

declare const BackToTop: FC<{
    children: ReactNode;
    className?: string;
    hidden: boolean;
}>;

export { BackToTop };
