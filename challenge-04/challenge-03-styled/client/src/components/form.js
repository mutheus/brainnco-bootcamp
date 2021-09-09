export function Form ({ handleSubmit, closeModal }) {
  return (
    <form class="car-form" onSubmit={handleSubmit}>
      <button className="car-form__btn" onClick={closeModal}>×</button>
      
      <label>
        <p>Image:</p>
        
        <input placeholder="e.g. https://website.com/my-awesome-car" type="url" name="image"/>
      </label>
      
      <label>
        <p>Model:</p>
        
        <input placeholder="e.g. Maverick" type="text" name="brandModel"/>
      </label>
      
      <label>
        <p>Year:</p>
        
        <input placeholder="e.g. 1970" type="number" name="year"/>
      </label>
      
      <label>
        <p>Plate:</p>
        
        <input placeholder="e.g. HGD6OFY" type="text" name="plate"/>
      </label>
      
      <label>
        <p>Color:</p>
        
        <input type="color" name="color"/>
      </label>
      
      <button type="submit">Add car</button>
    </form>
  );
}
