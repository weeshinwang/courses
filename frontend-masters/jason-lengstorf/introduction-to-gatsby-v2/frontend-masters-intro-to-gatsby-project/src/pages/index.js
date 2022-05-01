import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query Get {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <h1>HELLO WORLD</h1>
      <Link to="/about">Go to About</Link>
    </>
  );
}
