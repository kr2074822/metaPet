import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  text-align: center;

    & > p{
        margin: 258px 0 17px;
    }

  & * {
    color: #6c6c6c;
    font-size: 13px;
  }
`;

const TermsLink = styled(Link)`
  text-decoration: underline;
  margin: 0 3px;
`;

const JoinTerms = () => {
  return (
    <Wrap>
      <p>
        "가입하기” 버튼을 클릭하면 Metapet 계정이 생성되고
        <br /> 메타펫의
        <TermsLink>이용 ​​약관</TermsLink>및
        <TermsLink>개인 정보 보호 정책</TermsLink>에 동의하는 것입니다.
      </p>
    </Wrap>
  );
};
export default JoinTerms;
