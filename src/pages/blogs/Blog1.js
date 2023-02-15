import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import remarkBreaks from 'remark-breaks';
// import rehypeRaw from 'rehype-raw';

import Main from '../../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../../data/blogs/blog1.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Blog1 = () => (
  <Main
    title="About"
    description="Learn about Siddharth Mittal"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog/blog1">BOOK: HIT REFRESH</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        // rehypePlugins={[rehypeRaw]}
        renderers={{
          Link: LinkRenderer,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  </Main>
);

export default Blog1;
