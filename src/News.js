import React, { useContext, useEffect } from 'react';
import get from 'lodash.get';

import PostContext from './PostContext';
import PostContainer from './PostContainer';

export default function News(props) {
  const topic = get(props, 'match.params.topic', 'home');
  const [{ posts, hasMore }, { load, loadMore }] = useContext(PostContext);

  useEffect(() => load(topic), [topic]); // load a new topic if it changed

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return <PostContainer posts={posts} loadMore={loadMore} topic={topic} hasMore={hasMore} />;
}
