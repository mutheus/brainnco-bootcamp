import styled from 'styled-components';

const CarImage = styled.img`
  display: block;
  width: 100px;
  aspect-ratio: 2/1;
  border-radius: 9px;
  object-fit: cover;
`;

const ColorWrapper = styled.div`
  width: 100%;
  padding: 2px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  max-width: 20px;
  aspect-ratio: 1/1;
`;

const DeleteBtn = styled.button`
  height: 20px;
  padding: 0;
  aspect-ratio: 1/1;
  background-color: #fedcdb;
  border: none;
  color: #fc918e;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  place-content: center;
`;

const TableData = styled.td`
  color: #4f4f4f;
  padding: 0.5em;
`;

export function CarItem({ car, handleRemoveClick }) {
  return (
    <tr>
      <TableData>
        <div>
          <CarImage src={car.image} alt={car.brandModel} />
        </div>
      </TableData>
      <TableData>
        <p>{car.brandModel}</p>
      </TableData>
      <TableData>
        <p>{car.year}</p>
      </TableData>
      <TableData>
        <p>{car.plate}</p>
      </TableData>
      <TableData>
        <ColorWrapper bgColor={car.color} />
      </TableData>
      <TableData>
        <DeleteBtn onClick={() => handleRemoveClick(car.plate)}>
          <span>×</span>
        </DeleteBtn>
      </TableData>
    </tr>
  );
}
