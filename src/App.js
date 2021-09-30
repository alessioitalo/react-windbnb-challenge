import Header from './components/Header';
import Container from './components/Container';
import Refine from './components/Refine';
import Backdrop from './Backdrop';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('Oulu');
  const [refineSearch, setRefineSearch] = useState(false);

  const setCityHandler = (newCity) => {
    setCity(newCity);
  };

  const refineSearchHandler = () => {
    setRefineSearch(!refineSearch);
  };

  return (
    <div className='App'>
      {refineSearch && (
        <Backdrop toggleRefineSearch={refineSearchHandler}>
          <Refine setCityHandler={setCityHandler} />
        </Backdrop>
      )}
      <Header city={city} toggleRefineSearch={refineSearchHandler} />
      <Container city={city} />
    </div>
  );
}

export default App;
