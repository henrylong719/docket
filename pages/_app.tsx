import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="p-8">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
