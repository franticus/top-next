import React, { FC } from 'react';
import s from './Tag.module.css';
import cn from 'classnames';
import { TagProps } from './TagProps';

export const Tag: FC<TagProps> = ({
  size = 'sm',
  color,
  href,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(s.tag, className, {
        [s.sm]: size === 'sm',
        [s.m]: size === 'm',
        [s.ghost]: color === 'ghost',
        [s.red]: color === 'red',
        [s.green]: color === 'green',
        [s.gray]: color === 'gray',
        [s.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children} </a> : <>{children}</>}
    </div>
  );
};
