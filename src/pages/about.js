import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout>
      <h1>About Page</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
