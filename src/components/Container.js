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

  & .error {
    ${'' /* position: relative; */}
    ${
      '' /* margin: auto;
    width: 100%; */
    }
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
  }
`;

const Container = ({ city, guests }) => {
  const filteredStays = stays.filter((stay) => {
    return stay.city === city && stay.maxGuests >= guests;
  });
  return (
    <StyledContainer>
      {filteredStays.length > 1 ? (
        filteredStays.map((stay) => {
          return <Stay key={stays.indexOf(stay)} stay={stay} />;
        })
      ) : (
        <div className='error'>
          <h1> Whoops! We don't have any accomodation available for you.</h1>
          <h4>Please refine your search or come back again to see the lastest availability.</h4>
        </div>
      )}
    </StyledContainer>
  );
};

export default Container;

// city": "Helsinki",
//     "country": "Finland",
//     "superHost": false,
//     "title": "Stylist apartment in center of the city",
//     "rating": 4.4,
//     "maxGuests": 3,
//     "type": "Entire apartment",
//     "beds": 2,
//     "photo": "http
