import { Heading5 } from './heading5';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  grid-area: footer;
  padding: 2em;
  display: flex;
  justify-content: center;
  
  h5 {
    font-weight: 500;
  }
`;

export function Footer () {
  return (
    <FooterWrapper>
      <Heading5>&copy; 2021 stela. all rights reserved. </Heading5>
    </FooterWrapper>
  );
}
