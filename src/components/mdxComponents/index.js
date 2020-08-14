import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${props => props.theme.colors.preFormattedText};
`;

export default {
  h1: props => (
    <h1 className="heading1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h2: props => (
    <h2 className="heading2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h3: props => (
    <h3 className="heading3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h4: props => (
    <h4 className="heading4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h5: props => (
    <h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h6: props => (
    <h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  p: props => <p className="paragraph" {...props} />,
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
  
};

const element = (
  <h3>
    Hello!
  </h3>
);


/*
function BlogIndex({ data }) {
  return data
  const { edges: docs } = data.allMdx
  return (
    <Layout>
      {docs.map(({ node }) => {
        const { title, metaTitle, metaDescription } = node.frontmatter
        return (
          <div key={node.id}>
            <p>
              <div>{title}</div>
              <div>Description {metaDescription}</div>
            </p>
            {/!*<p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>*!/}
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

const ComponentName = ({ data }) => <html>{JSON.stringify(data, null, 4)}</html>

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
  `*/
