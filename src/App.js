import React from 'react';
import { hot } from 'react-hot-loader/root';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

import style from './style.css'; // eslint-disable-line no-unused-vars
import News from './News';
import About from './About';
import Header from './Header';
import PostContext from './PostContext';
import topics from './topics';
import useApi from './useApi';

const SUPPORTED_TOPICS = topics.map(t => t.key).join('|');

function App() {
  const [state, actions] = useApi();

  return (
    <Router basename={process.env.PUBLIC_PATH}>
      <PostContext.Provider value={[state, actions]}>
        <Header />
        <div className="container" styleName="style.content">
          <div className="row">
            <div className="offset-md-3 col-lg-6 col-sm-12">
              <Switch>
                <Route path="/about" exact component={About} />
                <Route path={`/:topic(${SUPPORTED_TOPICS})`} component={News} />
                <Route path="/" exact component={News} />
                <Route component={About} />
              </Switch>
            </div>
          </div>
        </div>
        <ScrollToTop showUnder={160}>
          <span styleName="style.up" />
        </ScrollToTop>
      </PostContext.Provider>
    </Router>
  );
}

export default hot(App);
