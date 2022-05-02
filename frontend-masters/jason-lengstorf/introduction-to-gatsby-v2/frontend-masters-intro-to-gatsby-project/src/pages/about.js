import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query CocotailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <GatsbyImage image={getImage(data.file)} alt="COCKTAIL IMAGE" />
      <h1>About This Site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
