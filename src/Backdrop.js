import styled from "styled-components";

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    ${'' /* z-index: 1; */}
    width: 100%;
    height: 100%;
    background: hsl(0,0%,0%, 0.4);
    ${'' /* opacity: 0.2; */}
`
const Backdrop = ({toggleRefineSearch, children}) => {
    return ( <StyledBackdrop  >
    {/* onClick={toggleRefineSearch} */}
    {children}</StyledBackdrop> );
}
 
export default Backdrop;