
'use client';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import Nav from '../app/components/nav/nav';
import Footer from '../app/components/footer/footer';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <Nav />
        {children}
        <Footer />
      </Provider>
    </>
  );
}
