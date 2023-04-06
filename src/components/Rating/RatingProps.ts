import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'sm' | 'm' | 'lg';
}
