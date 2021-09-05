export function Table ({ cars }) {
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
          {cars ? (
          cars.map((car) => (
            <tr dataSet={car.plate}>
              <td>
                <img src={car.image} alt={car.brandModel} />
              </td>
              <td>
                <p>{car.brandModel}</p>
              </td>
              <td>
                <p>{car.year}</p>
              </td>
              <td>
                <p>{car.plate}</p>
              </td>
              <td>
                <div>{car.color}</div>
              </td>
              <td>
                <button>×</button>
              </td>
            </tr>
          ))
          ) : (
            <tr>
              <td colspan="6">
                <p>Nenhum carro encontrado</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}