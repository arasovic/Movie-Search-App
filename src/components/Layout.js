import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, loading, placeholder }) => (

  <>
    <Navbar visibility={placeholder} />
    <Container fluid textAlign="center" className="main-container">
      <Segment placeholder={placeholder} color="blue" className="main-segment" loading={loading}>
        {children}
      </Segment>
    </Container>
    <Footer visibility={placeholder} />
  </>
);

export default Layout;
