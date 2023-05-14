import { useEffect, useState } from 'react';

import SubLayout from '@/components/SubLayout';
import styles from '../styles/Home.module.css';

export default function CSR() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // 브라우저에서 실행
    console.log('client');

    setTime(new Date().toISOString());
  }, []);

  return (

    <h1 className={styles.title}>
      {time}
    </h1>
  );
}

CSR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <SubLayout>
      {page}
    </SubLayout>

  );
};
