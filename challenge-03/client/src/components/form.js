export function Form () {
  return (
    <form class="car-form" data-js="car-form">
      <div>
        <label for="image">
          Image:<br/>
          <input placeholder="e.g. https://website.com/my-awesome-car" data-js="image" type="url" id="image" name="image"/>
        </label>
      </div>
      
      <div>
        <label for="brand-model">
          Model:<br/>
          <input placeholder="e.g. Maverick" data-js="brand-model" type="text" id="brand-model" name="brand-model"/>
        </label>
      </div>
      
      <div>
        <label for="year">
          Year:<br/>
          <input placeholder="e.g. 1970" data-js="year" type="number" id="year" name="year"/>
        </label>
      </div>
      
      <div>
        <label for="plate">
          Plate:<br/>
          <input placeholder="e.g. HGD6OFY" data-js="plate" type="text" id="plate" name="plate"/>
        </label>
      </div>
      
      <div>
        <label for="color">
          Color:<br/>
          <input data-js="color" type="color" id="color" name="color"/>
        </label>
      </div>
      
      <div>
        <button type="submit">Add car</button>
      </div>
    </form>
  );
}
