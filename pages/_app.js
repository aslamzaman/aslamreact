import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-submenu/dist/index.css';
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import SSRProvider from 'react-bootstrap/SSRProvider';
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>       
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
