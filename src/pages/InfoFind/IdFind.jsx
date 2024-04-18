import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import { LoginBtn } from "../../components/styled/UI/button/Button";
import { useState } from "react";
import Overlay from "../../components/popup/Overlay";
import IdFindPopup from "../../components/popup/IdFindPopup";
import ScrollToTop from "../../common/utils/scrollToTop";

const Wrap = styled.div`
  padding: 19px 28px 46px;
  & .id__find__title {
    font-size: 20px;
    color: #333333;
    font-weight: 500;
    line-height: 28px;
  }

  & .find__input__wrap {
    margin: 26px 0 16px;
  }

  & .find__input__wrap > div:first-child {
    margin-bottom: 20px;
  }

  & .phrases__wrap {
    color: #909090;
    font-size: 14px;
    line-height: 20px;
  }

  & .idfind__step1__btn {
    margin-top: 338px;
  }
`;

const IdFind = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalToggleClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrap>
      <ScrollToTop />
      <p className="id__find__title">
        가입시 등록하신 정보를
        <br />
        입력해주세요
      </p>

      <div className="find__input__wrap">
        <FormInput title="이름" placeholder="이름을 입력해주세요">
          이름
        </FormInput>
        <FormInput title="전화번호" placeholder="010-0000-0000">
          전화번호
        </FormInput>
      </div>

      <p className="phrases__wrap">
        회원정보에 등록된 휴대폰 번호가 생각나지 않으시면
        <br />
        마이페이지 – 고객문의를 이용해주세요.
      </p>

      <LoginBtn
        className="idfind__step1__btn"
        onClick={modalToggleClickHandler}
      >
        아이디 찾기
      </LoginBtn>

      {isOpen && (
        <>
          <Overlay>
            <IdFindPopup isOpen={modalToggleClickHandler} />
          </Overlay>
        </>
      )}
    </Wrap>
  );
};
export default IdFind;
