export function Form ({ handleSubmit }) {
  return (
    <form class="car-form" onSubmit={handleSubmit}>
      <div>
        <label for="image">
          Image:<br/>
          <input placeholder="e.g. https://website.com/my-awesome-car" type="url" id="image" name="image"/>
        </label>
      </div>
      
      <div>
        <label for="brand-model">
          Model:<br/>
          <input placeholder="e.g. Maverick" type="text" id="brand-model" name="brandModel"/>
        </label>
      </div>
      
      <div>
        <label for="year">
          Year:<br/>
          <input placeholder="e.g. 1970" type="number" id="year" name="year"/>
        </label>
      </div>
      
      <div>
        <label for="plate">
          Plate:<br/>
          <input placeholder="e.g. HGD6OFY" type="text" id="plate" name="plate"/>
        </label>
      </div>
      
      <div>
        <label for="color">
          Color:<br/>
          <input type="color" id="color" name="color"/>
        </label>
      </div>
      
      <div>
        <button type="submit" name="submit">Add car</button>
      </div>
    </form>
  );
}
