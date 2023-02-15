import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import BlogCell from '../components/Blog/BlogCell';
import data from '../data/blog';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Siddharth Mittal's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>Few musings I have</p>
        </div>
      </header>
      {data.map((project) => (
        <BlogCell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Blog;
