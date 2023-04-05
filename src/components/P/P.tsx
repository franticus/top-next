import React, { FC } from 'react';
import s from './P.module.css';
import cn from 'classnames';
import { PProps } from './PProps';

export const P: FC<PProps> = ({
  size = 'm',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(s.paragraph, className, {
        [s.sm]: size === 'sm',
        [s.m]: size === 'm',
        [s.lg]: size === 'lg',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
