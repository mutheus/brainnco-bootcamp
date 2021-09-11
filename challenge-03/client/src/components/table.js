import { CarItem } from './car-item';

export function Table({ cars, handleRemoveClick }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Brand / Model</th>
            <th>Year</th>
            <th>Plate</th>
            <th>Color</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cars === null ? (
            <tr>
              <td colSpan="6">
                <p className="empty-table">Looding...</p>
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
                <p className="empty-table">Nenhum carro encontrado</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
