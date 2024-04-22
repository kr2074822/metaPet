import styled from "styled-components";
import logo from "../../assets/images/leave/logo__img.png";
import {
  BtnLink,
  LeaveBtn,
  LoginBtn,
} from "../../components/styled/UI/button/Button";
import { useState } from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepOneWrap = styled(Wrap)`
  padding: 62px 24px 36px;

  & .leave__top__wrap > p {
    margin: 15px 0 236px;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
  }

  & .leave__bottom__wrap > p {
    margin-top: 10px;
  }

  & .leave__top__wrap,
  & .leave__bottom__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .leave__btn {
    margin-top: 36px;
  }
`;

const StepTwoWrap = styled(Wrap)`
  padding: 78px 24px 36px;

  & > img {
    margin-bottom: 24px;
  }

  & > p {
    margin: 15px 0 266px;
  }
`;

const LeaveTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const LeaveDesc = styled.p`
  text-align: center;
  color: #565656;
  line-height: 20px;
`;

const Leave = () => {
  const [step, setStep] = useState(false);

  const stepCheckHandler = () => {
    setStep(true);
  };

  return (
    <>
      {!step ? (
        <>
          <StepOneWrap>
            <div className="leave__top__wrap">
              <img src={logo} />

              <p>
                메타펫은 전세계의 반려동물이 주체가 되는 <br />
                글로벌 메타버스 기업으로 성장을 목표로 합니다.
              </p>
            </div>
            <div className="leave__bottom__wrap">
              <LeaveTitle>정말 탈퇴하시겠습니까?</LeaveTitle>
              <LeaveDesc>
                계정을 삭제하면 구매기록, 잔여 MET을 포함한
                <br />
                모든 데이터가 삭제되어 복구할 수 없습니다.
              </LeaveDesc>
            </div>
            <LeaveBtn className="leave__btn" onClick={stepCheckHandler}>
              탈퇴하기
            </LeaveBtn>
          </StepOneWrap>
        </>
      ) : (
        <>
          <StepTwoWrap>
            <img src={logo} />

            <LeaveTitle>탈퇴가 완료되었습니다.</LeaveTitle>

            <LeaveDesc className="">
              더 좋은 서비스를 제공하기 위해
              <br />
              노력하는 메타펫이 되겠습니다.
              <br />
              이용해주셔서 감사합니다.
            </LeaveDesc>

            <BtnLink to="/">
              <LoginBtn>메인으로</LoginBtn>
            </BtnLink>
          </StepTwoWrap>
        </>
      )}
    </>
  );
};
export default Leave;
