import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);
  

  return (
    <Layout>
      <Head title="Blog" />
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((item, index) => (
          <li key={`key-${index}`}>
            <h2><Link className={blogStyles.link} to={`/blog/${item.node.slug}`}>{item.node.title}</Link></h2>
            <p>{item.node.publishedDate}</p>
          </li>
        ))}  
      </ul>
     
    </Layout>
  );
}

export default BlogPage;