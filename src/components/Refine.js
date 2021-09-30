import styled from 'styled-components';

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
  }

  & span {
    width: 100%;
    border-right: 1px solid #f2f2f2;
  }

  & input {
    border: none;
    height: 100%;
    width: 99%;
    border-radius: 16px;
  }

  & input::placeholder {
    ${'' /* font-family: Mulish; */}
    font-weight: 800;
    font-size: 9px;
    color: black;
  }

  & input::active {
    border: 1px solid #333333;
  }
`;

const Refine = () => {
  return (
    <StyledRefineSearchBar>
      <form>
        <span>
          <input placeholder='LOCATION'></input>
        </span>
        <span>
          <input placeholder='GUESTS'></input>
        </span>
        <span>
          <button>Search</button>
        </span>
      </form>
    </StyledRefineSearchBar>
  );
};

export default Refine;
