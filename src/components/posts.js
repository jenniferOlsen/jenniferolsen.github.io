import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import PostTags from '../components/postTags'

const Container = styled.div`
  max-width: 90%;
`

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const PostCompany = styled.span`
  color: #8e8e8e;
  font-size: 14px;
  display: block;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-style: italic;
`
const ImgContainer = styled.div`
  max-height: 250px;
  overflow: hidden;
  margin-bottom: 20px;
`

export default ({ data }) => {
  return (
    <>
      {data.map(({ node }) => {
        return (
          <Container key={node.id}>
            <PostLink to={node.fields.slug}>
              {node.frontmatter.image && (
                <ImgContainer>
                  <Img
                    sizes={node.frontmatter.image.childImageSharp.sizes}
                    alt={node.frontmatter.title}
                  />
                </ImgContainer>
              )}
              <PostTitle>{node.frontmatter.title} </PostTitle>
            </PostLink>
            <PostCompany>{node.frontmatter.company}</PostCompany>{' '}
            <PostTags tags={node.frontmatter.tags} />
            <p>{node.excerpt}</p>
            <hr />
          </Container>
        )
      })}
    </>
  )
}
