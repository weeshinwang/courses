import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
    }
  }
`;

export default function SanityEpisode({ data }) {
  const { title, description, date, slug, youtubeID } = data.sanityEpisode;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>posted on {date}</p>
      <p>{description}</p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${slug.current}`}>
            FULL EPISODE HERE
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${youtubeID}`}>YouTube Link</a>
        </li>
      </ul>
    </Layout>
  );
}
