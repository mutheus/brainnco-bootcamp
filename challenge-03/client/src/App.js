import { useState, useEffect } from 'react';
import { Form } from './components/form';
import { Table } from './components/table';

function App() {
  const [cars, setCars] = useState([]);
  
  function handleSubmit (e) {
    e.preventDefault();
    
    const car = {
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandModel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value
    }
    
    const newCars = [car, ...cars];
    
    setCars(newCars);
  }
  
  useEffect(() => {
    async function getCars () {
      const data = await fetch('http://localhost:3333/cars');
      const result = await data.json();
      
      setCars(result);
    }
  }, [])
  
  return (
    <div className="app">
      <Form handleSubmit={handleSubmit} />
      
      <Table cars={cars} />
    </div>
  );
}

export default App;
