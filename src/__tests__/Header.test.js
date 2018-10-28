import React from 'react';
import { shallow } from 'enzyme';

import { HeaderComponent } from '../Header';

jest.mock('../topics', () => [
  {
    key: 'thoi-su',
    text: 'thoi su',
    visible: true
  },
  {
    key: 'kinh-te',
    text: 'thoi su'
  }
]);

describe('<Header />', () => {
  const wrapper = shallow(<HeaderComponent />);

  it('should have words highlighted', () => {
    // 1 for Home, 1 for About & a visible one
    expect(wrapper.find('li.nav-item')).toHaveLength(3);
  });
});
