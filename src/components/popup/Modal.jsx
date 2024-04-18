import PortalContainer from './PortalContainer';
import styled from 'styled-components';

const ModalWrap = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px 20px 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: 358px;
  height: 260px;
`;

const Modal = ({ children }) => {
  return (
    <PortalContainer>
      <ModalWrap>
        {children}
      </ModalWrap>
    </PortalContainer>
  );
};

export default Modal;
