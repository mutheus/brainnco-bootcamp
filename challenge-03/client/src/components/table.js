export function Table () {
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
        
        <tbody data-js="tbody"></tbody>
      </table>
    </div>
  );
}
