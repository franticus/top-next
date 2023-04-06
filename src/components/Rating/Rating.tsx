import React, { FC } from 'react';
import s from './P.module.css';
import cn from 'classnames';
import { RatingProps } from './RatingProps';

export const Rating: FC<RatingProps> = ({
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
