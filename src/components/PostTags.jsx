import React from "react"
import { StaticQuery, graphql } from "gatsby"
import tw from 'tailwind.macro'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// Utilities
import kebabCase from "lodash/kebabCase"

const TagList = styled.ul`
  ${tw `list-reset text-center text-lg`}
  li {
    display: inline-block;
    color: rgba(255,255,255,0.75);
    border: 2px solid rgba(255,255,255,0.75);
    border-radius: 6px;
    transition: color 300ms ease-in-out, background 350ms ease-in-out;
    margin: 0 0.5rem 0.5rem 0;
    padding: 4px 8px;
    a {
      color: rgba(255,255,255,0.75);
      &:hover {
        color: rgba(255,255,255,0.9);
      }
    }
    &:hover {
      background: rgba(255,255,255,0.85);
      border: 2px solid rgba(255,255,255,0.85);
      a {
        color: SlateBlue;
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query Tags($limit: Int) {
        allContentfulBlogPost(limit: $limit) {
          group(field: tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <TagList className="tags-list">
        {data.allContentfulBlogPost.group.map(tag => (
          <li key={tag.fieldValue}>
            <AniLink cover bg="#23262b" duration={1} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </AniLink>
          </li>
        ))}
      </TagList>
    )}
  />
)