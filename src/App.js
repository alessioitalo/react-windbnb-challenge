import Header from './components/Header';
import Container from './components/Container';
import Refine from './components/Refine';
import Backdrop from './Backdrop';
import { useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function App() {
  const [city, setCity] = useState('');
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
        <StyledModal>
          <Refine
            setCityHandler={setCityHandler}
            setGuestsHandler={setGuestsHandler}
            toggleRefineSearch={refineSearchHandler}
            city={city}
          />
          <Backdrop toggleRefineSearch={refineSearchHandler} />
        </StyledModal>
      )}
      <Header city={city} toggleRefineSearch={refineSearchHandler} />
      <Container city={city} guests={guests} />
      <footer>
        <div align='center'>
          coded by <a href='https://www.alessioitalo.uk/'>alessioitalo</a>
        </div>
        <div align='center'>
          Solution for a challenge from{' '}
          <a href='http://devchallenges.io' target='_blank'>
            Devchallenges.io
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
