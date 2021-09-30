import Header from './components/Header';
import Container from './components/Container';
import Refine from './components/Refine';
import Backdrop from './Backdrop';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('Oulu');
  const [guests, setGuests] = useState(1);
  const [refineSearch, setRefineSearch] = useState(false);

  const setCityHandler = (newCity) => {
    setCity(newCity);
  };

  const setGuestsHandler = (numberOfGuests) => {
    setGuests(numberOfGuests);
  };

  const refineSearchHandler = () => {
    setRefineSearch(!refineSearch);
  };

  return (
    <div className='App'>
      {refineSearch && (
        <Backdrop toggleRefineSearch={refineSearchHandler}>
          <Refine
            setCityHandler={setCityHandler}
            setGuestsHandler={setGuestsHandler}
            toggleRefineSearch={refineSearchHandler}
          />
        </Backdrop>
      )}
      <Header
        city={city}
        toggleRefineSearch={refineSearchHandler}
      />
      <Container city={city} guests={guests}/>
    </div>
  );
}

export default App;
