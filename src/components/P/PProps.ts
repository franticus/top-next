import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'sm' | 'm' | 'lg';
}
