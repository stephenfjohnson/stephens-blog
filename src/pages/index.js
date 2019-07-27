import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Stephen's Blog" />
        <BlogPosts>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const category = node.frontmatter.category || 'Untitled';

            const year = moment(node.frontmatter.date).format('YY');
            const monthDay = moment(node.frontmatter.date).format('MM-DD');
            return (
              <Post key={node.fields.slug}>
                <Stamp>
                  <div className="date-month-day">
                    <small>{monthDay}</small>
                  </div>
                  <div className="date-year">
                    {/* <small>{node.frontmatter.date}</small> */}
                    <small>{year}</small>
                  </div>
                  <div className="name">
                    <small>stephen</small>
                  </div>
                  <div className="x">
                    <small>x</small>
                  </div>
                </Stamp>
                <PostText>
                  <h5>
                    <h5>
                      {category}
                      {/* <Link to={category}>{category}</Link> */}
                    </h5>
                  </h5>
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
      </Layout>
    );
  }
}

export default BlogIndex;

const BlogPosts = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
`;

const Stamp = styled.div`
  margin-right: 2rem;
  border: 1px solid white;
  width: 100px;
  transform: rotate(-40deg);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'date-year date-month-day date-month-day date-month-day ' 'name name name x';

  div {
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  small {
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    text-align: center;
  }

  .date-month-day {
    grid-area: date-month-day;
  }

  .date-year {
    grid-area: date-year;
  }

  .name {
    grid-area: name;
    /* font-size: 11px; */
  }

  .x {
    grid-area: x;
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
