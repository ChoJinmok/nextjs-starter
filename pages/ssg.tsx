import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import SubLayout from '@/components/SubLayout';

import styles from '../styles/Home.module.css';

type Time = string;

export const getStaticProps: GetStaticProps<{ time: Time }> = async () => {
  // 빌드 시 한번만 실행, 서버에서도 찍히지 않는다.
  console.log('server');

  // time은 빌드할 떄 시간으로 저장된다. 후에 업데이트 되지 않음
  // data fetching을 ssg로 한다면 빌드 시 데이터를 모두 가져와서 static한 page를 미리 생성
  return {
    props: { time: new Date().toISOString() },
  };
};

export default function SSG({ time }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <h1 className={styles.title}>
      {time}
    </h1>
  );
}

SSG.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <SubLayout>
      {page}
    </SubLayout>
  );
};
