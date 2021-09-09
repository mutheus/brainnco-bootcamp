import { Heading5 } from './heading5';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  grid-area: footer;
  background-color: #FF9286;
  color: #FFC89D;
  padding: 2em;
`;

export function Footer () {
  return (
    <FooterWrapper>
      <Heading5>footer</Heading5>
    </FooterWrapper>
  );
}
