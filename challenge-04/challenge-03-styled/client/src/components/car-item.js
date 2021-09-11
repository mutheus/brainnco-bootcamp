export function CarItem({ car, handleRemoveClick }) {
  return (
    <tr>
      <td>
        <div className="car-image">
          <img src={car.image} alt={car.brandModel} />
        </div>
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
        <div
          className="container-color"
          style={{
            backgroundColor: `${car.color}`,
          }}
        ></div>
      </td>
      <td>
        <button onClick={() => handleRemoveClick(car.plate)} className="delete">
          ×
        </button>
      </td>
    </tr>
  );
}
