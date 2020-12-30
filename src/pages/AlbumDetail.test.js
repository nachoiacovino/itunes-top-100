import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../setupTests';
import AlbumDetail from './AlbumDetail';

it('should render AlbumDetail page', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <AlbumDetail />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
