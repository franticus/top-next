import React from 'react';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h2'>12345</Htag>
      <Button appearance='primary' arrow='right'>Узнать подробнее</Button>
      <Button appearance='ghost' arrow='down'>Читать отзывы</Button>
    </>
  );
}
