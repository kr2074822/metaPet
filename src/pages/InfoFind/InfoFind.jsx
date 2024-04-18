import styled from "styled-components";
import { BtnLink, InfoFindBtn } from "../../components/styled/UI/button/Button";

const Wrap = styled.div`
  padding: 142px 24px 0;
  height: calc(100vh - 115px);

  & > p {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    margin-bottom: 64px;
  }

  & button {
    margin-bottom: 12px;
  }
`;



const InfoFind = () => {
  return (
    <Wrap>
      <p>로그인에 도움이 필요하세요?</p>

      <BtnLink to="/idFind">
        <InfoFindBtn>아이디(이메일)을 잊어버렸습니다</InfoFindBtn>
      </BtnLink>

      <BtnLink to="/pwdFind">
        <InfoFindBtn>비밀번호를 잊어버렸습니다.</InfoFindBtn>
      </BtnLink>
    </Wrap>
  );
};
export default InfoFind;
