import { Dispatch, SetStateAction } from 'react';

declare const useMenu: () => boolean;
declare const setMenu: Dispatch<SetStateAction<boolean>>;

export { setMenu, useMenu };
