import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import SubLayout from '@/components/SubLayout';

import styles from '../styles/Home.module.css';

type Time = string;

export const getStaticProps: GetStaticProps<{ time: Time }> = async () => {
  // 재생성할 때마다 실행
  console.log('server');

  // isr하려면 revalidate 값을 함께 return해줘야한다. (revalidate 값을 캐싱해놓음)
  // revalidate는 초단위
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
};

export default function ISR({ time }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <h1 className={styles.title}>
      {time}
    </h1>
  );
}

ISR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <SubLayout>
      {page}
    </SubLayout>
  );
};
