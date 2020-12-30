import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../setupTests';
import Album from './Album';

it('should render Album component', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Album />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
