import React from 'react';
import { shallow } from 'enzyme';

import PostContainer from '../PostContainer';

describe('<PostContainer />', () => {
  it('should have `home` topic rendered', () => {
    const post = { title: 'test' };
    const loadMore = jest.fn();
    const wrapper = shallow(<PostContainer posts={[post]} hasMore loadMore={loadMore} />);

    expect(wrapper.find('Posts').prop('items')).toEqual([post]);
    expect(wrapper.find('InfiniteScroll').prop('hasMore')).toBeTruthy();
    expect(wrapper.find('InfiniteScroll').prop('loadMore')).toBe(loadMore);
  });
});
