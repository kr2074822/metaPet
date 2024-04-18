import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import MyFormTextarea from "../../components/form/FormTextarea";
import { LoginBtn } from "../../components/styled/UI/button/Button";

const Wrap = styled.div`
  padding: 14px 28px 22px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & .inquiry__btn {
    margin-top: 36px;
  }
`;

const Contact = () => {
  return (
    <Wrap>
      <FormInput title="이름(필수)" placeholder="이름을 입력해주세요" />
      <FormInput title="메일(필수)" placeholder="metapet@gmail.com" />
      <FormInput
        title="연락처 입력"
        placeholder="연락처 입력를 입력해주세요."
      />
      <MyFormTextarea
        title="문의사항 내용입력"
        placeholder="결제관련 문의사항 내용"
      />

      <LoginBtn className="inquiry__btn">문의하기</LoginBtn>
    </Wrap>
  );
};
export default Contact;
