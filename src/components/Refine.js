import { useState } from 'react';
import MiniButton from './MiniButton';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const StyledRefineSearchBar = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  height: 45%;
  width: 100%;

  & .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .bottom {
    width: 60%;
    display: flex;
    margin-left: 5%;
    color: #4f4f4f;
  }

  & .bottom span {
    display: flex;
    justify-content: flex-start;
    padding: 10px 30px;
    width: 100%;
  }

  & form {
    margin-top: 90px;
    height: 60px;
    width: 90%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    font-family: Mulish;
  }

  & form,
  & button {
    font-family: Mulish;
    font-weight: normal;
  }

  & .btn {
    width: 127px;
    padding: 0 24px;
    height: 48px;
    border: none;
    background: #eb5757;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    cursor: pointer;
  }

  & .top span {
    width: 100%;
    border-right: 1px solid #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  & input {
    border: none;
    padding: -10px -30px;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
    font-size: 18px;
  }

  & label {
    position: absolute;
    left: 20px;
    top: 5px;
    font-weight: 800;
    font-size: 12px;
    color: black;
    align-self: flex-start;
  }

  & input::active {
    border: 1px solid #333333;
  }

  & .guest-counter {
    display: flex;
    flex-direction: column;
  }
`;

const Refine = ({
  setCityHandler,
  setGuestsHandler,
  toggleRefineSearch,
  city,
}) => {
  // const cityRef = useRef();
  // const guestsRef = useRef();
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuest] = useState(false);
  const [adults, setAdults] = useState(null);
  const [kids, setKids] = useState(null);
  const [temporaryCity, setTemporaryCity] = useState('');

  const increaseAdultsHandler = () => {
    setAdults(adults + 1);
  };

  const decreaseAdultsHandler = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const decreaseKidsHandler = () => {
    if (kids > 0) {
      setKids(kids - 1);
    }
  };

  const increaseKidsHandler = () => {
    setKids(kids + 1);
  };

  const locationOpacityHandler = () => {
    setShowLocations(true);
    setShowGuest(false);
  };

  const guestsOpacityHandler = () => {
    setShowLocations(false);
    setShowGuest(true);
  };

  const refineSubmitHandler = (e) => {
    e.preventDefault();
    toggleRefineSearch(false);
    setKids(null)
    setAdults(null)
    setTemporaryCity(null)
    setGuestsHandler(adults + kids);
    setCityHandler(temporaryCity);
  };
  return (
    <StyledRefineSearchBar>
      <div className='top'>
        <form onSubmit={refineSubmitHandler}>
          <span>
            <label>LOCATION</label>
            <input
              // placeholder='Choose location'
              readOnly
              value={temporaryCity? temporaryCity : 'Choose location'}
              onFocus={locationOpacityHandler}
            />
          </span>
          <span>
            <label>GUESTS</label>
            <input
            // placeholder='Add guests'
              readOnly
              value={kids || adults ? kids + adults : 'Add guests'} 
              onFocus={guestsOpacityHandler}
            />
          </span>
          <span>
            <button className='btn'>
              <FontAwesomeIcon icon={faSearch} color='white' />
              Search
            </button>
          </span>
        </form>
      </div>
      <div className='bottom'>
        <span style={{ opacity: `${showLocations ? 1 : 0}` }}>
          <ul>
            <li onClick={() => setTemporaryCity('Helsinki')}>
              <FontAwesomeIcon icon={faMapMarker} /> Helsinki, Finland
            </li>
            <li onClick={() => setTemporaryCity('Turku')}>
              <FontAwesomeIcon icon={faMapMarker} /> Turku, Finland
            </li>
            <li onClick={() => setTemporaryCity('Oulu')}>
              <FontAwesomeIcon icon={faMapMarker} /> Oulu, Finland
            </li>
            <li onClick={() => setTemporaryCity('Vaasa')}>
              <FontAwesomeIcon icon={faMapMarker} /> Vaasa, Finland
            </li>
          </ul>
        </span>
        <span
          className='guest-counter'
          style={{ opacity: `${showGuests ? 1 : 0}` }}
        >
          <div>
            <div>Adults</div> <div>Ages 13 or above</div>
            <MiniButton sign='-' onClick={decreaseAdultsHandler} /> {adults || '0'}
            <MiniButton sign='+' onClick={increaseAdultsHandler} />
          </div>
          <div>
            <div>Children</div>
            <div>Ages 2-12</div>
            <MiniButton sign='-' onClick={decreaseKidsHandler} /> {kids || '0'}
            <MiniButton sign='+' onClick={increaseKidsHandler} />
          </div>
        </span>
      </div>
    </StyledRefineSearchBar>
  );
};

export default Refine;
