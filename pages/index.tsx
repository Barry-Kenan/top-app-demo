import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';


function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);



  return (
    <>
      <Htag tag='h1'>asdfasdfasd</Htag>
      <Button appearence='primary' arrow='right' >button</Button>
      <Button appearence='ghost' arrow='down' >button2</Button>
      <P size='s'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero excepturi doloribus eum, ipsa aliquid in sequi repellendus unde, culpa labore hic repudiandae cum eaque sunt soluta magni nisi totam? Quam.</P>
      <P >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero excepturi doloribus eum, ipsa aliquid in sequi repellendus unde, culpa labore hic repudiandae cum eaque sunt soluta magni nisi totam? Quam.</P>
      <P size='l'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero excepturi doloribus eum, ipsa aliquid in sequi repellendus unde, culpa labore hic repudiandae cum eaque sunt soluta magni nisi totam? Quam.</P>
      <Tag>asdfasdf</Tag>
      <Tag size='s'>asdfasdf</Tag>
      <Tag size='s' color='primary'>asdfasdf</Tag>
      <Tag color='red'>asdfasdf</Tag>
      <Tag color='green'>asdfasdf</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}