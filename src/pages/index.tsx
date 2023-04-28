import React, { useState } from 'react';
import { Button, H, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home() {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <H tag='h1'>Курсы по Photoshop</H>
      <Button appearance='primary' arrow='right'>
        Узнать подробнее
      </Button>
      <Button appearance='ghost' arrow='down'>
        Читать отзывы
      </Button>
      <P size='sm'>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <P size='m'>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <P size='lg'>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag size='m' color='ghost'>10 000 $</Tag>
      <Tag size='m' color='red'>10 000 $</Tag>
      <Tag size='m' color='green'>10 000 $</Tag>
      <Tag size='m' color='gray'>10 000 $</Tag>
      <Tag size='m' color='primary'>10 000 $</Tag>
      <br />
      <Tag size='sm' color='ghost'>10 000 $</Tag>
      <Tag size='sm' color='red'>10 000 $</Tag>
      <Tag size='sm' color='green'>10 000 $</Tag>
      <Tag size='sm' color='gray'>10 000 $</Tag>
      <Tag size='sm' color='primary'>10 000 $</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);