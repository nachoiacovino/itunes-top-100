import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../setupTests';
import NotFound from './NotFound';

it('should render NotFound page', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <NotFound />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
