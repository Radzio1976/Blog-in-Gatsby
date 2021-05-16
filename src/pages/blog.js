import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';

const  Blog = ({data}) => {
    console.log(data)
    return (
        <Layout>
            <div>
                {
                    data.allMarkdownRemark.edges.map((post) => {
                        return(
                            <div key={post.node.id} style={{
                                margin: '30px 0px',
                                borderBottom: '1px solid grey'
                            }}>
                                <h3>{post.node.frontmatter.title}</h3>
                                <small>Napisany przez {post.node.frontmatter.author} dnia {post.node.frontmatter.date}</small>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    <Link to={post.node.frontmatter.path}>Więcej</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Blog;

export const query = graphql`
    query {
        allMarkdownRemark {
        edges {
            node {
            id
            frontmatter {
                author
                date
                path
                title
            }
            }
        }
    }
}`


