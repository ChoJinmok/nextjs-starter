import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

export type NextPageWithSubLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithSubLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}
