import 'jsdom-global/register';
import { mount } from 'enzyme';
import Head from 'next/head';
import Root from '../../Root';
import Home from '../../pages';
import { initializeStore } from '../../store';

let component;
const reduxStore = initializeStore();

beforeEach(() => {
  component = mount(<Root store={reduxStore}><Home /></Root>);
});

afterEach(() => {
  component.unmount();
});

it('shows page title', () => {
  expect(component.find(Head).length).toEqual(1);
});
