import Link from 'next/link';

interface HomeProps {
  children: React.ReactNode;
}

export default function SubLayout({ children }: HomeProps) {
  return (
    <>
      <h1><Link href="/">Home 으로</Link></h1>
      {children}
    </>
  );
}
