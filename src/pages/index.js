import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Stamp from '../theme/stamp';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Stephen's Blog" />
        <HomepageContent>
          <BlogPosts>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              const category = node.frontmatter.category || 'Untitled';

              const year = moment(node.frontmatter.date).format('YY');
              const monthDay = moment(node.frontmatter.date).format('MM-DD');
              return (
                <Post key={node.fields.slug}>
                  <Stamp monthDay={monthDay} year={year} />
                  <PostText>
                    <h5>{category}</h5>
                    <h3>
                      <Link to={node.fields.slug}>{title}</Link>
                    </h3>
                  </PostText>
                </Post>
              );
            })}
          </BlogPosts>
          <HighlightWrapper>
            <h2>Posts</h2>
          </HighlightWrapper>
        </HomepageContent>
      </Layout>
    );
  }
}

export default BlogIndex;

const HomepageContent = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const BlogPosts = styled.div`
  display: flex;
  flex-direction: row;
`;

const HighlightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    font-family: Abril Fatface, serif;
    font-size: 82px;
    color: yellow;
    font-weight: 400;
  }
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6rem;
  width: 100%;
  /* align-items: center; */
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const PostText = styled.div`
  h3 {
    margin: 0;
    a {
      color: white;
      text-decoration: none;
      font-family: Abril Fatface, serif;
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 2rem;
      box-shadow: none;
    }
  }

  h5 {
    font-size: 0.8rem;
    font-family: Montserrat, sans-serif;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    a {
      color: white;
      text-decoration: none;
      box-shadow: none;
    }
  }
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            category
            description
          }
        }
      }
    }
  }
`;
