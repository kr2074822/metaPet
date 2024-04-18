import PortalContainer from './PortalContainer';
import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = ({ children }) => {
  return (
    <PortalContainer>
      <Backdrop>
        {children}
      </Backdrop>
    </PortalContainer>
  );
};

export default Overlay;
