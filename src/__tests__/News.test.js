import React from 'react';
import { shallow } from 'enzyme';

import News from '../News';

describe('<News />', () => {
  it('should have `home` topic rendered', () => {
    const wrapper = shallow(<News />, { context: {} });
    expect(wrapper.find('PostContainer').prop('topic')).toBe('home');
  });

  it('should render new topic when the url changed', async () => {
    const wrapper = shallow(<News />, { context: { posts: [] } });
    expect(wrapper.find('PostContainer').prop('posts')).toEqual([]);

    wrapper.setProps({ match: { params: { topic: 'thoi-su' } } });
    expect(wrapper.find('PostContainer').prop('topic')).toBe('thoi-su');
    expect(wrapper.find('PostContainer').prop('posts')).toEqual([]);
  });
});
