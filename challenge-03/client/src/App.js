import { useState, useEffect } from 'react';
import { Form } from './components/form';
import { Table } from './components/table';
import { get, post, del } from './services/http';

const url = 'http://localhost:3333/cars';
  
function App() {
  const [cars, setCars] = useState([]);
  
  async function handleSubmit (e) {
    e.preventDefault();
    
    const car = {
      id: e.target.elements.plate.value,
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandModel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value
    }
    
    const newCars = [...cars, car];
    
    const result = await post(url, car);
    setCars(newCars);
    
    if (result.error) {
      alert(JSON.stringify(result.message))
    }
  }
  
  useEffect(() => {
    async function getCars () {
      const result = await get(url);
      
      setCars(result);
    }
    
    getCars();
  }, [cars])
  
  return (
    <div className="app">
      <Form handleSubmit={handleSubmit} />
      
      <Table cars={cars} />
    </div>
  );
}

export default App;
