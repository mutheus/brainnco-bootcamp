import { Heading3 } from './heading3';

import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  background-color: #FFC89D;
  color: #FF9286;
  padding: 2em;
  display: flex;
  align-items: center;
`;

export function Sidebar () {
  return (
    <SidebarWrapper>
      <Heading3>sidebar</Heading3>
    </SidebarWrapper>
  );
}
