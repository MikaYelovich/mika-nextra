import { FC, ReactNode } from 'react';

declare const LastUpdated: FC<{
    date?: Date;
    children?: ReactNode;
    locale?: string;
}>;

export { LastUpdated };
