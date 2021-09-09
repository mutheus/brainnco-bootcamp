import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  height: 46px;
  
  background-color: ${({primary}) => primary ? '#333' : 'transparent'};
  border: ${({primary}) => primary ? 'none' : '3px solid #333'};
  color: ${({primary}) => primary ? '#FFF' : '#333'};
  
  width: max-content;
  place-items: center;
  padding: 0 1em;
  font-weight: 500;
`; 
