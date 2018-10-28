import React from 'react';
import PropTypes from 'prop-types';
import formatRelative from 'date-fns/formatRelative';
import locale from 'date-fns/locale/vi';
import { Link } from 'react-router-dom';

import style from './style.css'; // eslint-disable-line no-unused-vars

export default function Posts(props) {
  return props.items.map(p => (
    <div className="card mb-3" key={p.id}>
      <img styleName="style.card-image" src={p.cover} alt={p.title} />
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <p className="card-subtitle text-muted">{p.summary}</p>
      </div>
      <div className="card-footer text-muted text-center">
        <a className="mr-auto float-left" href={p.link} target="_blank" rel="noopener noreferrer">{ normailizeDate(p.time) }</a>
        <Link to={`/${p.cate_parent.shorturl}`} className="float-right">{ p.cateparent }</Link>
      </div>
    </div>
  ));
}

Posts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

Posts.defaultProps = {
  items: []
};

function normailizeDate(time) {
  return formatRelative(new Date(Number(time) * 999.9836351866752), new Date(), { locale });
}
