import styled from 'styled-components';
import stays from '../stays.json';
import Stay from './Stay';

const StyledContainer = styled.section`
  width: 90%;
  position: relative;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1.5%;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  & .error {
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
  }
`;

const StyledSubHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: auto;
  padding-bottom: 32px;

  @media (max-width: 600px) {
    padding: 0;
  }

  & .subheader {
    font-weight: 700;
    font-size: 24px;
  }
`;

const Container = ({ city, guests }) => {
  let filteredStays = stays;

  // TO BE FIXED !
  // filtering must not be applied on first app launch...
  // it must work even if only one state is defined (guests || city)
  
  if (city && guests) {
    filteredStays = stays.filter((stay) => {
      return stay.city === city && stay.maxGuests >= guests;
    });
  }
  return (
    <>
      <StyledSubHeader>
        <span className='subheader'>Stays in Finland </span>
        <span>{filteredStays.length} stays</span>
      </StyledSubHeader>
      <StyledContainer>
        {console.log(filteredStays)}
        {filteredStays.length > 1 ? (
          filteredStays.map((stay) => {
            console.log(`${stay.title} ${stay.maxGuests}`);
            return <Stay key={stays.indexOf(stay)} stay={stay} />;
          })
        ) : (
          <div className='error'>
            <h1> Whoops! We don't have any accomodation available for you.</h1>
            <h4>
              Please refine your search or come back again to see the lastest
              availability.
            </h4>
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default Container;
