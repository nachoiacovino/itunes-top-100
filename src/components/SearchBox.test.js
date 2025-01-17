import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../setupTests';
import SearchBox from './SearchBox';

it('should render SearchBox component', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <SearchBox />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
