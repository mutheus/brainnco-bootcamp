import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  height: 46px;
  width: max-content;
  cursor: pointer;

  border: ${({ primary }) => (primary ? 'none' : '3px solid #FF9286')};
  color: ${({ primary }) => (primary ? '#FFC89D' : '#FF9286')};
  background-color: ${({ primary }) => (primary ? '#FF9286' : 'transparent')};

  place-items: center;
  padding: 0 1em;
  font-weight: 500;
  border-radius: 9px;
`;
