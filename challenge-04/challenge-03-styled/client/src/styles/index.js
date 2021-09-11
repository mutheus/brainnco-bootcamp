import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 2em 1em;
`;

export const Logo = styled.h1`
  width: max-content;
  margin: 0 auto;
  color: #4f4f4f;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.4em;
`;

export const Button = styled.button`
  height: 46px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: transparent;
  padding: 0 1.4em;
`;

export const Modal = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  padding: 2em 0;
  top: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

export const Hero = styled.div`
  height: 30vh;
  padding: 2em 0;
`;

export const Heading2 = styled.h2`
  font-weight: 500;
  font-size: 1.4rem;
  color: #000;
`;

export const Actions = styled.div`
  display: flex;
  place-items: center;

  button:last-child {
    margin-left: auto;
  }
`;

export const Heading3 = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  color: #000;
`;

export const Span = styled.span`
  display: block;
  font-weight: 400;
  margin-right: 8px;
  font-size: 1.3rem;
`;
