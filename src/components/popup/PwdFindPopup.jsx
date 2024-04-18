import styled from "styled-components";
import Modal from "./Modal";
import { BtnLink, PopupCloseBtn } from "../styled/UI/button/Button";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .guide {
    font-size: 16px;
    margin: 13px 0 17px;
    line-height: 20px;
    text-align: center;
  }

  & .popup__btn__wrap {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & #closeBtn {
    width: 100%;
    color: #565656;
  }

  & #idFindBtn {
    width: 100%;
  }
`;

const PwdFindPopup = ({ isOpen }) => {
  return (
    <Modal>
      <Wrap>
        <p className="guide">
          스팸함을 확인해보시거나,
          <br />
          입력하신 이름과 아이디(이메일)가
          <br />
          메타펫 회원정보와 일치하는지 확인해주세요.
          <br />
          <br />
          아이디(이메일)을 잊으신 경우,
          <br />
          먼저 아이디 찾기를 진행해주세요
        </p>

        <div className="popup__btn__wrap">
          <PopupCloseBtn id="closeBtn" onClick={isOpen}>
            닫기
          </PopupCloseBtn>

          <BtnLink to="/idFind">
            <PopupCloseBtn id="idFindBtn">아이디찾기</PopupCloseBtn>
          </BtnLink>
        </div>
      </Wrap>
    </Modal>
  );
};
export default PwdFindPopup;
