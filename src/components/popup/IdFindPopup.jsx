import styled from "styled-components";
import Modal from "./Modal";
import { PopupCloseBtn } from "../styled/UI/button/Button";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;

  & .email {
    color: #1790ff;
    font-size: 18px;
    font-weight: 600;
  }

  & .guide {
    font-size: 16px;
    margin: 27px 0 47px;
    line-height: 20px;
  }
`;

const IdFindPopup = ({ isOpen }) => {
  return (
    <Modal>
      <Wrap>
        <span className="email">ok***@naver.com</span>
        <p className="guide">
          마킹되지 않은 아이디(이메일)을 확인하시려면
          <br />
          마이페이지 고객문의를 이용해주세요.
        </p>

        <PopupCloseBtn onClick={isOpen}>닫기</PopupCloseBtn>
      </Wrap>
    </Modal>
  );
};
export default IdFindPopup;
