import { Heading2 } from './heading2';
import { Button } from '../styles';

import styled from 'styled-components';

const ContentWrapper = styled.main`
  grid-area: content;
  padding: 2em;
  
  article {
    max-width: 500px;
  }
  
  p {
    line-height: 1.5;
  }
`;

export function Content ({ title, content }) {
  return (
    <ContentWrapper>
      <article>
        <Heading2>{title}</Heading2>
        
        <p>{content}</p>
      
        <Button primary>Get full article</Button>
      </article>
    </ContentWrapper>
  );
}
