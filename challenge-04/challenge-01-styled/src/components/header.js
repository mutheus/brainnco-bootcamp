import { Heading1 } from './heading1';
import { Heading6 } from './heading6';
import { Button } from '../styles';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  grid-area: header;
  display: flex;
  place-items: center;
  background-color: #FFC89D;
  color: #FF9286;
  padding: 2em;
  gap: 1em;
  
  button {
    margin-left: auto;
  }
`;

export function Header () {
  return (
    <HeaderWrapper>
      <Heading1>Logo</Heading1>
      
      <Heading6>Search</Heading6>
      
      <Button secondary>Sign up</Button>
    </HeaderWrapper>
  );
}
