import '../styles/globals.css';
import Layout from './Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: gray;
        }
      `}</style>
    </Layout>
  );
}
