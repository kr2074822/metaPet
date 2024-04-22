import styled from "styled-components";
import logo from "../../assets/images/common/logo.png";
import userDefault from "../../assets/images/common/user_img.png";
import backArrow from "../../assets/images/common/back_arrow_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  height: 55px;
  padding: 7px 17px 0px;
  background-color: #ffffff;
  margin-bottom: 32px;
`;

const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.type === "t4" ? "center" : "space-between"};
  align-items: center;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: ${(props) => (props.type === "t4" ? "30px" : " 35px")};
    height: ${(props) => (props.type === "t4" ? "30px" : " 32px")};
    margin-right: 10px;
  }

  span {
    font-size: 23px;
    font-weight: 500;
    font-family: "Poppins", sans-serif !important;
    color: #000;
  }
`;

const HeaderUser = styled.div``;

const Login = styled.div`
  img {
    width: 38px;
    height: 38px;
  }
`;

const HeaderTitle = styled.div`
  span {
    font-size: 22px;
    font-weight: 700;
    color: #333333;
  }
`;

const HeaderBack = styled.div`
  a {
    img {
      width: 36px;
      height: 36px;
    }
  }
`;

const HeaderLoginLink = styled(Link)`
  font-size: 16px;
  font-size: bold;
  color: #33c2ff;
`;

function Header() {
  const header = useSelector((state) => state.headerType);
  const loginState = useSelector((state) => state.loginState);
  const loginUser = useSelector((state) => state.loginUser.user);

  return (
    <Wrapper>
      {
        header.type === 't1' ?
          <HeaderContainer>
            <HeaderLogo type={header.type} to="/">
              <img src={logo} />
              <span>Metapet</span>
            </HeaderLogo>

            <HeaderUser>
              <Login>
                {
                  loginState.value ?
                    <Link to="/myPage">
                      {
                        loginUser ?
                          <img src={loginUser?.image} />
                          : null
                      }
                    </Link>
                    : <HeaderLoginLink to="/login">로그인</HeaderLoginLink>
                }
              </Login>
            </HeaderUser>
          </HeaderContainer>

          : header.type === 't2' ?
            <HeaderContainer>
              <HeaderTitle>
                <span>{header.title}</span>
              </HeaderTitle>
              <Login>
                {
                  loginState.value ?
                    <Link to="/myPage">
                      {
                        loginUser ?
                          <img src={loginUser?.image} />
                          : null
                      }
                    </Link>
                    : <HeaderLoginLink to="/login">로그인</HeaderLoginLink>
                }
              </Login>
            </HeaderContainer>

            : header.type === 't3' ?
              <HeaderContainer>
                <HeaderBack>
                  <a href="#none"><img src={backArrow} /></a>
                </HeaderBack>

                <HeaderTitle>
                  <span>{header.title}</span>
                </HeaderTitle>

                <Login>
                  <a href="#none"><img src={userDefault} /></a>
                </Login>
              </HeaderContainer>

              :
              <HeaderContainer type={header.type}>
                <HeaderLogo to="/" type={header.type}>
                  <img src={logo} />
                  <span>Metapet</span>
                </HeaderLogo>
              </HeaderContainer>
      }
    </Wrapper>
  );
}

export default Header;
