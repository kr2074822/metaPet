import styled from "styled-components";
import kakao from "../../../assets/images/login/kakao.png";
import naver from "../../../assets/images/login/naver.png";
import facebook from "../../../assets/images/login/facebook.png";
import apple from "../../../assets/images/login/apple.png";
import { Link } from "react-router-dom";

const Wrap = styled.div`
    & .sns__login__wrap{
        display: flex;
        justify-content: space-between;
        width: 266px;
        margin: 25px auto 62px;
    }

  & p {
    text-align: center;
    margin-top: 170px;
  }
`;

const SnsIconBox = styled(Link)`
  background-color: #f4f4f4;
  border-radius: 16px;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SnsLogin = () => {
  return (
    <Wrap>
      <p>간편하게 SNS로그인</p>
      <div className="sns__login__wrap">
        <SnsIconBox>
          <img src={kakao} />
        </SnsIconBox>

        <SnsIconBox>
          <img src={naver} />
        </SnsIconBox>

        <SnsIconBox>
          <img src={facebook} />
        </SnsIconBox>

        <SnsIconBox>
          <img src={apple} />
        </SnsIconBox>
      </div>
    </Wrap>
  );
};

export default SnsLogin;
