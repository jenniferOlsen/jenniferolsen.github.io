import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PostTags from '../components/postTags'
import { PostWrapper } from '../components/postwrapper'

const StyledTag = styled.span`
  font-style: italic;
`
const DataGrid = styled.div`
  p {
    margin: 0;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <PostWrapper>
        {post.frontmatter.image && (
          <Img
            sizes={post.frontmatter.image.childImageSharp.sizes}
            alt={post.frontmatter.title}
          />
        )}
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <DataGrid>
          <p>
            <StyledTag>link</StyledTag>:{' '}
            <a href={post.frontmatter.link}>{post.frontmatter.linktext}</a>
          </p>
          <p>
            <StyledTag>tech</StyledTag>:{' '}
            <PostTags tags={post.frontmatter.tags} />
          </p>
          <p>
            <StyledTag>company</StyledTag>: {post.frontmatter.company}
          </p>
        </DataGrid>
      </PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        company
        link
        linktext
        image {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
