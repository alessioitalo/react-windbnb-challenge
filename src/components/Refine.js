import { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const StyledRefineSearchBar = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  background: white;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40vh;

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

  & button {
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

  & span {
    ${'' /* background: yellow; */}
    width: 100%;
    border-right: 1px solid #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  ${
    '' /* & .test-span{
    background: yellow;

  } */
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
`;

const Refine = ({setCityHandler, setGuestsHandler, toggleRefineSearch}) => {
  const cityRef = useRef();
  const guestsRef = useRef();
  const refineSubmitHandler = (e) => {
    e.preventDefault();
    setCityHandler(cityRef.current.value);
    setGuestsHandler(guestsRef.current.value);
    toggleRefineSearch(false)
  };
  return (
    <StyledRefineSearchBar>
      <form onSubmit={refineSubmitHandler}>
        <span>
          <label>LOCATION</label>
          <input ref={cityRef} />
        </span>
        <span>
          <label>GUESTS</label>
          <input ref={guestsRef} />
        </span>
        <span>
          <button>
            <FontAwesomeIcon icon={faSearch} color='white' />
            Search
          </button>
        </span>
      </form>
    </StyledRefineSearchBar>
  );
};

export default Refine;
