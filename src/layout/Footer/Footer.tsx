import React, { FC } from 'react';
import { FooterProps } from './FooterProps';

export const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
  <div {...props}>
    Footer
  </div>
  );
};
