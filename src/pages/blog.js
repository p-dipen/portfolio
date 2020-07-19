import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h2>
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
