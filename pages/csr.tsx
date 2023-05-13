import { useEffect, useState } from 'react';

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
