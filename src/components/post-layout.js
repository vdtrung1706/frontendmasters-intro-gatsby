import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function PostLayout({ children, pageContext }) {
  const { description, title } = pageContext.frontmatter;

  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
