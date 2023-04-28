import React, { FC } from 'react';
import { HeaderProps } from './HeaderProps';

export const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
  <div {...props}>
    Header
  </div>
  );
};
