import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import Head from 'next/head';


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavbarComponent />
      <hr />
      {children}
    </>
  )
}

export default Layout;