import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';


export interface CatalogItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
    pict: any;
    width?: string;
    height?: string;
}