import styled from "styled-components";
import errorImg from "../../assets/images/common/notfound.png";
import { MainLink } from "../styled/UI/link/Link";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { headerChange, menuChange } from "../../store/store";
// import CustomeLink from "../Link/link";

const Wrapper = styled.div`
  display: flex;
  padding: 0 22px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 136px;
    height: 130px;
    margin: 100px;
    margin-bottom: 25px;
  }

  span {
    display: block;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 15px;
    color: #333333;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #565656;
    margin-bottom: 200px;
  }
`;

function NotFound() {
  // init('t4', 'home');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      headerChange({
        type: "t4",
        // title: 'hot',
      })
    );
    dispatch(menuChange("home"));
  }, []);
  return (
    <Wrapper>
      <img src={errorImg} />
      <span>404</span>
      <p>멍멍 준비중 입니다..!</p>

      <MainLink to="/">메인으로</MainLink>
    </Wrapper>
  );
}

export default NotFound;
