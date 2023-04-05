import React, { FC } from 'react';
import s from './Button.module.css';
import { ButtonProps } from './ButtonProps';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button: FC<ButtonProps> = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === 'primary',
        [s.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <ArrowIcon
          className={cn(s.arrow, {
            [s.down]: arrow === 'down',
          })}
        />
      )}
    </button>
  );
};
