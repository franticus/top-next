import React, { FC, useContext, useEffect } from 'react';
import cn from 'classnames';
import s from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu: FC = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={cn(s.firstLevel, {
                  [s.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={s.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={s.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(s.secondLevelBlock, {
                [s.secondLevelBlockOdened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(s.thirdLevel, {
          [s.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </a>
    ));
  };

  return <div className={s.menu}>{buildFirstLevel()}</div>;
};
