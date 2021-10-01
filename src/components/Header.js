import logo from '../images/logo.svg';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.header`
  padding: 49px 0 85px;
  display: flex;
  width: 90%;
  justify-content: space-between;
  position: relative;
  margin: auto;

  & img{
    width: 15%;
  }
`;

const StyledSubHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  position: relative;
  margin: auto;
  padding-bottom: 32px;

  & .subheader {
    font-weight: 700;
    font-size: 24px;
  }
`;

const StyledSearch = styled.div`
  cursor: pointer;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 19px;

  & span {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 19px;
  }

  & .fa-span {
    border: none;
    padding-right: 0;
  }

  & .guest {
    color: #bdbdbd;
  }
`;

const Header = ({ city, toggleRefineSearch }) => {
  const refineSearchHandler = () => {
    toggleRefineSearch();
  };
  return (
    <>
      <StyledHeader>
        <img src={logo} alt='logo' />
        <StyledSearch onClick={refineSearchHandler}>
          <span>{city}, Finland</span>
          <span className='guest'>Add Guest</span>
          <span className='fa-span'>
            <FontAwesomeIcon icon={faSearch} color='#EB5757' />
          </span>
        </StyledSearch>
      </StyledHeader>

    </>
  );
};

export default Header;
