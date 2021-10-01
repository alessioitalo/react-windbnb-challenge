import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StyledStay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;

  &:hover{
    & .photo-overlay{
      opacity: 0.5
    }
  }

  & .superhost {
    border: 1px solid #4f4f4f;
    box-sizing: border-box;
    border-radius: 12px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 12px;
    ${'' /* line-height: 15px; */}
    padding: 8px 5px;
    margin-right: 15px;
  }

  & .details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px 0;
  }

  & .photo {
    height: 300px;
    width: 100%;
    border-radius: 10px;
    background: ${(props) => `url(${props.image})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .photo-overlay{
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.1;
  }

  & .info {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
  }

  & .rating {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
  }

  & .description {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    align-self: flex-start;
  }
`;

const Stay = ({ stay }) => {
  return (
    <StyledStay image={stay.photo}>
      {/* <span>{stay.city}</span> */}
      <div className='photo'><div className="photo-overlay"/></div>
      {/* <img src={stay.photo} alt='stay' /> */}
      <div className='details'>
        <span>
          {stay.superHost && <span className='superhost'>SUPERHOST</span>}
          <span className='info'>
            {stay.type} {stay.beds ? `${stay.beds} beds` : ''}
          </span>
        </span>
        <span className='rating'>
          <FontAwesomeIcon icon={faStar} color='#EB5757' />
          {stay.rating}
        </span>
      </div>
      {/* </div> */}
      <div className='description'>{stay.title}</div>
    </StyledStay>
  );
};

export default Stay;
