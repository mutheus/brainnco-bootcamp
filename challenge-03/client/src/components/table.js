import { CarItem } from './car-item';

export function Table ({ cars, handleRemoveClick }) {
  return (
    <div class="table-wrapper">
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
          { cars.length !== 0 ? (
            cars.map((car) => (
              <CarItem 
                car={car} 
                handleRemoveClick={handleRemoveClick} 
              />
            ))
          ) : (
            <tr>
              <td colspan="6">
                <p className="empty-table">Nenhum carro encontrado</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
