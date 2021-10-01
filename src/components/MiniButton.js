import styled from 'styled-components'

const StyledMiniButton = styled.button`
width: 23px;
height: 23px;
background: white;
color: #828282;
border: 1px solid #828282;
border-radius: 4px;
cursor: pointer;
`

const MiniButton = ({ sign, onClick }) => {
  return <StyledMiniButton onClick={onClick}>{sign}</StyledMiniButton>;
};

export default MiniButton;
