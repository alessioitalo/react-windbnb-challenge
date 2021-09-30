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
`;

const Container = ({ city, guests }) => {
  const filteredStays = stays.filter((stay) => {
    return stay.city === city && stay.maxGuests >= guests;
  });
  return (
    <StyledContainer>
      {filteredStays.map((stay) => {
        return <Stay key={stays.indexOf(stay)} stay={stay} />;
      })}
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
