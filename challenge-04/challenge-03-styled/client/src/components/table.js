import styled from 'styled-components';
import { CarItem } from './car-item';

const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin: 2em 0;
`;

const Content = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr {
    border-top: 1px solid #d1d1d1;
  }
`;

const TableHeading = styled.th`
  padding: 0.5em;
  text-align: left;
  white-space: nowrap;
  font-weight: 500;
  color: #000;
`;

const EmptyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  color: #4f4f4f;
`;

export function Table({ cars, handleRemoveClick }) {
  return (
    <TableWrapper>
      <Content>
        <thead>
          <tr>
            <TableHeading>Image</TableHeading>
            <TableHeading>Brand / Model</TableHeading>
            <TableHeading>Year</TableHeading>
            <TableHeading>Plate</TableHeading>
            <TableHeading>Color</TableHeading>
            <TableHeading></TableHeading>
          </tr>
        </thead>

        <tbody>
          {cars === null ? (
            <tr>
              <td colSpan="6">
                <EmptyTable>
                  <p>Loading...</p>
                </EmptyTable>
              </td>
            </tr>
          ) : cars.length ? (
            cars.map((car) => (
              <CarItem
                key={car.plate}
                car={car}
                handleRemoveClick={handleRemoveClick}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <EmptyTable>
                  <p>Nenhum carro encontrado</p>
                </EmptyTable>
              </td>
            </tr>
          )}
        </tbody>
      </Content>
    </TableWrapper>
  );
}
