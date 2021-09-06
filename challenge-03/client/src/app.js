import { useState, useEffect } from 'react';
import { get, post, del } from './services/http';
import { Form } from './components/form';
import { Table } from './components/table';
import { Alert } from './components/alert';

const url = 'http://localhost:3333/cars';
  
function App () {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');
  const [isAlertTrue, setIsAlertTrue] = useState(false);
  
  useEffect(() => {
    async function getCars () {
      const result = await get(url);
      if (result.error) {
        setMessage(result.message);
        return;
      }
      
      setCars(result);
    }
    
    getCars();
  }, [])
  
  useEffect(() => {
    const id = setTimeout(function() {
      setMessage('');
    }, 1000);
    
    return () => {
      clearTimeout(id);
    }
  }, [message])
  
  async function handleSubmit (e) {
    e.preventDefault();
    
    const car = {
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandModel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value
    }
    
    const newCars = [...cars, car];
    
    const result = await post(url, car);
    
    if (result.error) {
      setMessage(result.message);
      return;
    }
    
    e.target.reset();
    setCars(newCars);
  }
  
  async function handleRemoveClick (plate) {
    const newCars = cars.filter(car => car.plate !== plate);
    const result = await del(url, { plate });
    
    if (result.error) {
      setMessage(result.message);
      return;
    }
    
    setCars(newCars);
  }
  
  return (
    <div className="app">
      {message.length > 0 && <Alert message={message} />}
    
      <Form handleSubmit={handleSubmit} />
      
      <Table 
        cars={cars} 
        handleRemoveClick={handleRemoveClick} 
      />
    </div>
  );
}

export default App;
