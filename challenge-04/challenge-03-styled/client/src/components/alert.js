import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 4em;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #fff;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #d1d1d1;

  h5 {
    font-weight: 400;
  }
`;

export function Alert({ message }) {
  return (
    <Container>
      <h5>{message}</h5>
    </Container>
  );
}
