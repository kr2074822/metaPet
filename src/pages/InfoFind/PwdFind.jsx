import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import { LoginBtn } from "../../components/styled/UI/button/Button";
import { useState } from "react";
import Overlay from "../../components/popup/Overlay";
import PwdFindPopup from "../../components/popup/PwdFindPopup";

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
    color: #333333;
    font-size: 14px;
    line-height: 22px;
    margin-top: 271px;
  }

  & .idfind__step1__btn {
    margin-top: 36px;
  }
`;

const PwdFind = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalToggleClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrap>
      <p className="id__find__title">
        가입시 등록하신 정보를
        <br />
        입력해주세요
      </p>

      <div className="find__input__wrap">
        <FormInput title="이름" placeholder="이름을 입력해주세요">
          이름
        </FormInput>
        <FormInput title="아이디(이메일)" placeholder="metapet@gmail.com">
          전화번호
        </FormInput>
      </div>

      <p className="phrases__wrap">
        메타펫의 회원 비밀번호는 암호화 저장되어 분실 시 찾아드릴 수 없는
        정보입니다.
        <br />
        등록된 회원정보 확인을 통해 비밀번호를 재설정 하실 수 있습니다.
      </p>

      <LoginBtn
        className="idfind__step1__btn"
        onClick={modalToggleClickHandler}
      >
        비밀번호 찾기
      </LoginBtn>

      {isOpen && (
        <>
          <Overlay>
            <PwdFindPopup isOpen={modalToggleClickHandler} />
          </Overlay>
        </>
      )}
    </Wrap>
  );
};
export default PwdFind;
