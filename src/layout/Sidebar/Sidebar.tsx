import React, { FC } from 'react';
import { SidebarProps } from './SidebarProps';
import { Menu } from '../Menu/Menu';

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
