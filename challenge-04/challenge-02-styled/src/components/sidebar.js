import { Heading5 } from './heading5';
import { Heading6 } from './heading6';

import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  padding: 2em;
`;

const Recommended = styled.div`
  background-color: #F1F4F5;
  padding: 2em;
  
  h5 {
    text-transform: uppercase;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .7em;
  
  h6 {
    font-weight: 500;
    font-size: .87rem;
  }
  
  small {
    margin-right: 1em;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
  }
`;

export function Sidebar ({ titles, handleItemClick }) {
  return (
    <SidebarWrapper>
      <Recommended>
        <Heading5>Popular posts</Heading5>
      
        <List>
          { titles.map((item, index) => (
            <li 
              key={item.id} 
              onClick={(event) => handleItemClick(event, index)}
            >
              <Heading6>
                <a href={item.id}>
                  <small>{item.id}</small> 
                  {item.title}
                </a>
              </Heading6>
            </li>
          ))}
        </List>
      </Recommended>
    </SidebarWrapper>
  );
}
