import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../setupTests';
import Error from './Error';

it('should render Error component', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Error />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
