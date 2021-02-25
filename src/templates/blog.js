import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

/*export const query = graphql`
  query ($slug: String) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title,
        date
      }
      html
    }
}`;*/

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "YYYY-MM-DD")
      body {
        raw
        references {
          title
          file {
            url
          }
        }
      }
    }
  }
`;



const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": () => {
        const alt = props.data.contentfulBlogPost.body.references[0].title;
        const url = props.data.contentfulBlogPost.body.references[0].file.url;
        return <img src={url}  alt={alt} />
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {
        documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)
      }
    </Layout>
  );
}

export default Blog;