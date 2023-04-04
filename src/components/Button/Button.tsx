import React, { FC } from 'react';
import s from './Button.module.css';
import { ButtonProps } from './ButtonProps';
import cn from 'classnames';

export const Button: FC<ButtonProps> = ({
  appearance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === 'primary',
        [s.ghost]: appearance === 'ghost',
      })}
      {...props}
    > 
      {children}
    </button>
  );
};
