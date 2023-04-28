import React, { FC } from 'react';
import { FooterProps } from './FooterProps';
import { format } from 'date-fns';
import cn from 'classnames';
import s from './Footer.module.css';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(className, s.footer)} {...props}>
      <div>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
};
