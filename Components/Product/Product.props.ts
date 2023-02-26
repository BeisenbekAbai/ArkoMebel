import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';



export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    images: any[];
    productName: string;
    colors: string[];
    cost: number;
    discount?: number;
    hit?: boolean;
    productNumber: string;
    sizes: {
        width: string;
        height: string;
        depth: string;
    }
}