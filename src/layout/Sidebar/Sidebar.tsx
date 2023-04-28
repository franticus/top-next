import React, { FC } from 'react';
import { SidebarProps } from './SidebarProps';

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
  <div {...props}>
    Sidebar
  </div>
  );
};
