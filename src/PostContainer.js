import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Posts from './Posts';

export default React.memo(props => {
  const { posts, loadMore, hasMore } = props;

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div className="loader" key={0}>Loading ...</div>}
    >
      <Posts items={posts} />
    </InfiniteScroll>
  );
});
