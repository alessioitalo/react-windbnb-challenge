import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsl(0, 0%, 0%, 0.4);
  opacity: 0.8;
`;
const Backdrop = ({ toggleRefineSearch}) => {
  return (
    <StyledBackdrop onClick={toggleRefineSearch} />
  );
};

export default Backdrop;
