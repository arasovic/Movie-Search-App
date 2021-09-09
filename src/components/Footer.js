import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import MoviePagination from './MoviePagination';

const Footer = ({ visibility }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <Menu fixed="bottom" compact style={!visibility ? { visibility: 'hidden' } : null}>
      <Container>
        <Menu.Item position="right" fitted="horizontally">
          <MoviePagination />
        </Menu.Item>
      </Container>
    </Menu>
  </>
);

export default Footer;
