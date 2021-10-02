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
  min-height: 40%;
  width: 100%;

  & .top {
    display: flex;
    justify-content: center;
    ${'' /* background: red; */}
  }

  & form {
    margin: 30px 0;
    width: 90%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }

  & form,
  & .btn,
  & input,
  & span {
    font-family: Mulish;
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

  & .btn:hover {
    background: #bb4444;
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
    height: 100%;
    width: 100%;
    border-radius: 16px;
    padding: 0 20px;
    font-size: 16px;
  }

  & label {
    position: absolute;
    left: 20px;
    top: 0;
    font-weight: 800;
    font-size: 10px;
  }

  & input::active {
    border: 1px solid #333333;
  }

  & .bottom {
    width: 60%;
    display: flex;
    margin-left: 5%;
    color: #4f4f4f;
  }

  & .bottom-half {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  & .counter {
    padding: 0 10px;
    font-weight: 700;
  }
  & .bold {
    font-weight: 700;
    color: black;
  }
  & .guests-counter {
    padding: 20px 0;
  }

  @media (max-width: 600px) {
    & .top {
      flex-direction: column;
      align-items: center;
    }

    & .top span {
      border-right: 0;
    }

    & form {
      ${'' /* padding: 10px 0; */}
      flex-direction: column;
      justify-content: space-between;
      width: 96%;
      padding: 5px;
    }

    & input {
      margin: 1px 0;
      height: 200%;
      padding: 20px;
    }

    & .bottom {
      width: 100%;
      margin: 0;
    }

    & .bottom-half {
      ${'' /* background: yellow; */}
    }

    & .btn {
      display: none;
      ${'' /* order: 1; */}
    }
  }
`;

const Refine = ({ setCityHandler, setGuestsHandler, toggleRefineSearch }) => {
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
    setKids(null);
    setAdults(null);
    setTemporaryCity(null);
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
              readOnly
              value={temporaryCity ? temporaryCity : 'Choose location'}
              onFocus={locationOpacityHandler}
            />
          </span>
          <span>
            <label>GUESTS</label>
            <input
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
        <span
          className='bottom-half'
          style={{ visibility: `${showLocations ? 'visible' : 'hidden'}` }}
        >
          <ul>
            <li onClick={() => setTemporaryCity('Helsinki')}>
              <FontAwesomeIcon icon={faMapMarker} />{' '}
              <span>Helsinki, Finland</span>
            </li>
            <li onClick={() => setTemporaryCity('Turku')}>
              <FontAwesomeIcon icon={faMapMarker} /> <span>Turku, Finland</span>
            </li>
            <li onClick={() => setTemporaryCity('Oulu')}>
              <FontAwesomeIcon icon={faMapMarker} /> <span>Oulu, Finland</span>
            </li>
            <li onClick={() => setTemporaryCity('Vaasa')}>
              <FontAwesomeIcon icon={faMapMarker} /> <span>Vaasa, Finland</span>
            </li>
          </ul>
        </span>
        <span
          className='bottom-half'
          style={{ opacity: `${showGuests ? 1 : 0}` }}
        >
          <div>
            <div className='text bold'>Adults</div>
            <div>Ages 13 or above</div>
            <div className='guests-counter'>
              <MiniButton sign='-' onClick={decreaseAdultsHandler} />
              <span className='counter'>{adults || '0'}</span>
              <MiniButton sign='+' onClick={increaseAdultsHandler} />
            </div>
          </div>
          <div>
            <div className='text bold'>Children</div>
            <div className='text'>Ages 2-12</div>
            <div className='guests-counter'>
              <MiniButton sign='-' onClick={decreaseKidsHandler} />
              <span className='counter'>{kids || '0'}</span>
              <MiniButton sign='+' onClick={increaseKidsHandler} />
            </div>
          </div>
        </span>
      </div>
    </StyledRefineSearchBar>
  );
};

export default Refine;
