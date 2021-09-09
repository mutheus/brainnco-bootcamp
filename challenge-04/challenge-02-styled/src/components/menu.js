import styled from 'styled-components';

const MenuWrapper = styled.nav`
  grid-area: menu;
  display: flex;
  justify-content: center;
  padding: 0 2em;
`;

const Filters = styled.ul`
  display: flex;
  gap: 1em;
  align-items: center;
`;

const Heading = styled.h4`
  font-weight: 500;
  color: #9D9D9D;
`;

const Link = styled.a`
  /* some other style */
  
  ${({active}) => active && `
    background-color: #F1F4F5;
    border-radius: 4px;
    padding: .5em;
    
    h4 {
      font-weight: 600;
      color: #333;
    }
  `}
`;

export function Menu () {
  return (
    <MenuWrapper>
      <Filters>
        <Link><Heading>All</Heading></Link>
        <Link><Heading>Travel</Heading></Link>
        <Link active><Heading>Design</Heading></Link>
        <Link><Heading>Brazil</Heading></Link>
      </Filters>
    </MenuWrapper>
  );
}
