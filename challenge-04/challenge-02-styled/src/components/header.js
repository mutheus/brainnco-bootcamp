import { Button } from '../styles';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  grid-area: header;
  display: flex;
  place-items: center;
  padding: 2em;
  display: flex;
  gap: 1em;
  
  *:last-child {
    margin-left: auto;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  text-transform: lowercase;
`;

export function Header () {
  return (
    <HeaderWrapper>
      <Logo>Stela</Logo>
      
      <Button secondary>Get in touch</Button>
    </HeaderWrapper>
  );
}
