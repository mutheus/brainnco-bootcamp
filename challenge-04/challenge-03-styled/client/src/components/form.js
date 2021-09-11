import styled from 'styled-components';
import { Button } from '../styles';

const Input = styled.input`
  height: 46px;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: transparent;
  padding: 0 1.4em;
`;

const FormWrapper = styled.form`
  display: flex;
  position: relative;
  width: 90%;
  max-width: 500px;
  height: min-content;
  border-radius: 9px;
  background-color: #fff;
  padding: 2em;
  flex-direction: column;
  gap: 1em;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  top: 0.1em;
  right: 0.4em;
  position: absolute;
  font-size: 1.5rem;
  color: #b6b6b6;
  font-weight: 400;
`;

const Label = styled.p`
  margin: 4px;
  height: auto;
`;

export function Form({ handleSubmit, closeModal }) {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <CloseBtn onClick={closeModal}>×</CloseBtn>

      <label>
        <Label>Image:</Label>

        <Input
          placeholder="e.g. https://website.com/my-awesome-car"
          type="url"
          name="image"
        />
      </label>

      <label>
        <Label>Model:</Label>

        <Input placeholder="e.g. Maverick" type="text" name="brandModel" />
      </label>

      <label>
        <Label>Year:</Label>

        <Input placeholder="e.g. 1970" type="number" name="year" />
      </label>

      <label>
        <Label>Plate:</Label>

        <Input placeholder="e.g. HGD6OFY" type="text" name="plate" />
      </label>

      <label>
        <label>Color:</label>

        <Input type="color" name="color" />
      </label>

      <Button type="submit">Add car</Button>
    </FormWrapper>
  );
}
