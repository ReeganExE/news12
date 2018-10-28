import { useReducer } from 'react';
import { handleActions, createAction } from 'redux-actions';
import loadNews from './api';

const newRequest = createAction('newRequest');
const loadSuccess = createAction('success');
const loadFailed = createAction('error');

const initialState = {
  page: 1,
  posts: [],
  hasMore: true
};

const reducer = handleActions({
  newRequest: (state, action) => ({
    ...state,
    topic: action.payload,
    page: 0,
    posts: []
  }),
  success: (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    posts: [...state.posts, ...action.payload],
    page: state.page + 1,
    hasMore: state.topic !== 'home'
  }),
  error: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
}, initialState);

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const load = (topic) => {
    dispatch(newRequest(topic));
    loadNews(topic, 1)
      .then(json => dispatch(loadSuccess(json.data)))
      .catch(error => dispatch(loadFailed(error)));
  };

  const loadMore = () => {
    loadNews(state.topic, state.page + 1)
      .then(json => dispatch(loadSuccess(json.data)))
      .catch(error => dispatch(loadFailed(error)));
  };

  return [state, { load, loadMore }];
};
