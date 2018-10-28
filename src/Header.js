import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import topics from './topics';

const headers = topics.filter(t => t.visible);

export const HeaderComponent = () => (
  <nav className="navbar navbar-expand-lg fixed-top bg-white border-bottom box-shadow">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link text-muted">Trang chủ</NavLink>
          </li>
          {
            headers.map(t => (
              <li className="nav-item" key={t.key}>
                <NavLink to={`/${t.key}`} className="nav-link text-muted">{t.text}</NavLink>
              </li>
            ))
          }
          <li className="nav-item">
            <NavLink to="/about" exact className="nav-link text-muted">About us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default withRouter(HeaderComponent);
