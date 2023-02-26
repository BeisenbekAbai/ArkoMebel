import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';




export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
    text2?: string;
    pict?: any;
    article?: string;
    type: 'primary'| 'red' | 'login' | 'favourite' | 'shopping-cart' | 'benefit' | 'categoryBtn';
}