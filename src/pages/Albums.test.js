import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../setupTests';
import Albums from './Albums';

it('should render Albums page', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Albums />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
