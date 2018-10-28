import React from 'react';
import { shallow } from 'enzyme';

import Posts from '../Posts';

describe('<Posts />', () => {
  it('should have `home` topic rendered', () => {
    const post = {
      id: '887705',
      title: 'YouTube Kids đến Việt Nam sau 3 năm ra mắt',
      cover: 'https://znews-photo.zadn.vn/w480/Uploaded/fsmyy/2018_10_27/YouTube_Kids.jpg',
      time: '1540664144',
      modified: '1540664144',
      link: 'https://news.zing.vn/youtube-kids-den-viet-nam-sau-3-nam-ra-mat-post887705.html',
      cateparent: 'Công nghệ',
      cate_parent: {
        id: 476,
        display_name: 'Công nghệ',
        shorturl: 'cong-nghe'
      }
    };
    const wrapper = shallow(<Posts items={[post]} />);

    expect(wrapper.find('Link').prop('to')).toEqual('/cong-nghe');
    expect(wrapper.find('.card-title').text()).toEqual(post.title);
  });
});
