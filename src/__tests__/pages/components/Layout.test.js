import { shallow } from 'enzyme';
import { Container } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

let component;

beforeEach(() => {
  component = shallow(<Layout />);
});

it('shows a navbar', () => {
  expect(component.find(Navbar).length).toEqual(1);
});

it('show a footer', () => {
  expect(component.find(Footer).length).toEqual(1);
});

it('show a container', () => {
  expect(component.find(Container).length).toEqual(1);
});
