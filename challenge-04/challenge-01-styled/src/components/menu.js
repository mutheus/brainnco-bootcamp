import { Heading4 } from './heading4';

import styled from 'styled-components';

const MenuWrapper = styled.nav`
  grid-area: menu;
  background-color: #FF9286;
  color: #FFC89D;
  padding: 1.5em 2em;
`;

export function Menu () {
  return (
    <MenuWrapper>
      <Heading4>menu</Heading4>
    </MenuWrapper>
  );
}
