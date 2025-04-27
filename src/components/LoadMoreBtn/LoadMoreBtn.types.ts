import { ReactNode } from 'react'

export interface ILoadMoreBtn {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
}