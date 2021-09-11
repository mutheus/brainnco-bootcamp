import { Heading5 } from './heading5';

import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  padding: 2em;
`;

const Recommended = styled.div`
  background-color: #f1f4f5;
  padding: 2em;

  h5 {
    text-transform: uppercase;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  small {
    margin-right: 1em;
  }
`;

const Heading6 = styled.h6`
  font-weight: 500;
  font-size: 0.87rem;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
`;

export function Sidebar({ titles, handleItemClick }) {
  return (
    <SidebarWrapper>
      <Recommended>
        <Heading5>Popular posts</Heading5>

        <List>
          {titles.map((item, index) => (
            <li
              key={item.id}
              onClick={(event) => handleItemClick(event, index)}
            >
              <Heading6>
                <Anchor href={item.id}>
                  <small>{item.id}</small>
                  {item.title}
                </Anchor>
              </Heading6>
            </li>
          ))}
        </List>
      </Recommended>
    </SidebarWrapper>
  );
}
