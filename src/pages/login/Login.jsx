import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import FormCheckBox from "../../components/form/FormCheckBox";
import { Link, useNavigate } from "react-router-dom";
import { LoginBtn, JoinBtn } from "../../components/styled/UI/button/Button";
import SnsLogin from "./ui/SnsLogin";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { loginStateChange } from "../../store/store";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 28px;

  & > div {
    width: 100%;
  }

  & .user__input__wrapper:first-child {
    margin-bottom: 20px;
  }

  & .user__check__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 14px 0 36px;
  }

  & .login__btn__wrap button:first-child {
    margin-bottom: 10px;
  }
`;

const UserInfoFind = styled(Link)`
  font-size: 14px;
`;




const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });



  // function login() {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, user.email, user.password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       dispatch(loginStateChange(user));
  //       console.log(user);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });

  // }



  function login() {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() =>
        signInWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(loginStateChange({value: user.email}));
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
      )
  }





  return (
    <Wrap>
      <div className="user__input__wrapper">
        <FormInput
          title="이메일"
          type="email"
          userInput="userId"
          placeholder="아이디를 입력해주세요."
          setUser={setUser}
        />
      </div>

      <div className="user__input__wrapper">
        <FormInput
          title="비밀번호"
          type="password"
          userInput="userPwd"
          placeholder="비밀번호를 입력해주세요."
          setUser={setUser}
        />
      </div>

      <div className="user__check__box">
        <FormCheckBox />
        <UserInfoFind to="/infoFind">아이디/비밀번호 찾기</UserInfoFind>
      </div>

      <div className="login__btn__wrap">
        <Link to="/login">
          <LoginBtn onClick={() => { login() }}>로그인</LoginBtn>
        </Link>

        <Link to="/join">
          <JoinBtn>회원가입</JoinBtn>
        </Link>
      </div>

      <SnsLogin />
    </Wrap>
  );
};

export default Login;
