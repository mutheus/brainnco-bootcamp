import { useState, useEffect } from 'react';
import { get, post, del } from './services/http';
import { Form } from './components/form';
import { Table } from './components/table';
import { Alert } from './components/alert';
import * as S from './styles';

import GlobalStyle from './global-style';

const url = 'http://localhost:3333/cars';
  
function App () {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');
  const [isAddingCar, setIsAddingCar] = useState(false);
  
  useEffect(() => {
    async function getCars () {
      const result = await get(url);
      
      if (result.error) {
        setMessage(result.message);
        return;
      }
      
      setCars(result.reverse());
    }
    
    getCars();
  }, [])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 1000);
    
    return () => clearTimeout(timer);
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
    
    const newCars = [car, ...cars];
    
    const result = await post(url, car);
    
    if (result.error) {
      setMessage(result.message);
      return;
    }
    
    e.target.reset();
    setCars(newCars);
    setIsAddingCar(false);
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
  
  function closeModal () {
    setIsAddingCar(false);
  }
  
  return (
    <>
      <GlobalStyle />
      
      {message.length > 0 && <Alert message={message} />}
      
      <S.Wrapper>
        <a href="/">
          <S.Logo>mutheuswagen</S.Logo>
        </a>
      </S.Wrapper>

      <S.Wrapper as="main">
        {isAddingCar && (
          <div className="modal">
            <Form handleSubmit={handleSubmit} closeModal={closeModal} />
          </div>
        )}
        
        <div className="content__hero">
          <h2>Welcome, John 🤗</h2>
        </div>
        
        
        <div className="content__actions">
          <h3 className="content__title">All cars</h3>
          
          <button onClick={() => setIsAddingCar(true)}><span>+</span> Add car</button>
        </div>
        
        <Table 
          cars={cars} 
          handleRemoveClick={handleRemoveClick} 
        />
      </S.Wrapper>
    </>
  );
}

export default App;
