import { shallow } from 'enzyme';
import MovieDetailsPage from '../../pages/movie/[id]';
import Layout from '../../components/Layout';

let component;

beforeEach(() => {
  component = shallow(<MovieDetailsPage />);
});

it('shows a layout', () => {
  expect(component.find(Layout).length).toEqual(1);
});
