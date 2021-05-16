import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({data}) => {
    console.log(data)
    return(
        <Layout>
            <div style={{
                marginTop: '30px'
            }}>
                <Link to="/blog">Wróć</Link>
                <h3 style={{
                    marginTop: '10px'
                }}>{data.markdownRemark.frontmatter.title}</h3>
                <small>Napisany przez {data.markdownRemark.frontmatter.author} w dniu {data.markdownRemark.frontmatter.date}</small>
                <p style={{
                    marginTop: '10px'
                }}>{data.markdownRemark.internal.content}</p>
            </div>
        </Layout>
    )
}

export default BlogPost;

export const query = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            frontmatter {
                author
                date
                path
                title
              }
              internal {
                content
              }
        }
    }`