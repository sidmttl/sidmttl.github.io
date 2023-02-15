import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const BlogCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

BlogCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCell;
