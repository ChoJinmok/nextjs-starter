import Link from 'next/link';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import styles from '../styles/Home.module.css';

type Time = string;

// getServerSideProps는 props를 return해야하는 규칙이 있음
// return한 props는 해당 페이지에 전달된다.
// 데이터를 서버에서 fetching할 수도 있음
export const getServerSideProps: GetServerSideProps<{ time: Time }> = async () => {
  // 서버에서 실행
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
};

export default function Home({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1 className={styles.title}>
        {time}
      </h1>

      <ul>
        <li><h1><Link href="/csr">CSR 로</Link></h1></li>
        <li><h1><Link href="/ssg">SSG 로</Link></h1></li>
        <li><h1><Link href="/isr">ISR 로</Link></h1></li>
      </ul>
    </>
  );
}
