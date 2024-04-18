import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import { LoginBtn } from "../../components/styled/UI/button/Button";
import { useEffect, useState } from "react";
import JoinTerms from "./ui/JoinTerms";
import { Link } from "react-router-dom";
import ScrollToTop from "../../common/utils/scrollToTop";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { uid } from "uid"
import { db,  } from "../../common/api/firebase";
import { ref, set } from "firebase/database";
import 'firebase/compat/database'; // Realtime Database 모듈 추가


const StepOneWrap = styled.div`
  padding: 0 28px;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }

  & .next__btn {
    margin: 316px 0 46px;
  }
`;

const StepTwoWrap = styled.div`
  padding: 20px 28px 46px;
  margin: 0 auto;

  & > div:not(:first-child) {
    margin-top: 20px;
  }

  & .name__join__wrap {
    display: flex;
    align-items: center;

    & div:first-child {
      margin-right: 14px;
    }
  }
`;

const Join = () => {
  const [step, setStep] = useState(true);

  const stepOneNextClickHandler = () => {
    setStep(false);
  };

  const [sign, setSign] = useState({
    uuid: uid(),
    email: "",
    password: "",
    phone: "",
    cash: 0,
    follower: {},
    following: {},
    bio: "",
    collection: {},
    product: {},
    nickName: "",
    firstName: "",
    lastName: "",
    active: true,
    like: {},
    image: "https://firebasestorage.googleapis.com/v0/b/metapet-a77a3.appspot.com/o/user_img.png?alt=media&token=a936a3e5-8b8d-4d5e-91db-94dc80b3cf31",
    cart: {}
  });

  console.log(sign);


  const Signup = () => {
    async function register(email, password) {
      try {
        const auth = getAuth();
        console.log(auth);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);

        set(ref(db, "user/" + sign.uuid), sign);
      } catch (error) {
        console.log(error.message);
      }
    }
    register(sign.email, sign.password);
  }



  // useEffect(() => {
  //   async function getProduct() {
  //     const dbRef = ref(db);
  //     await get(child(dbRef, "/"))
  //       .then(snapshot => {
  //         if (snapshot.exists()) {
  //           // setProduct(snapshot.val());
  //           console.log(snapshot.val());
  //         } else {
  //           console.log("No data available");
  //         }
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }
  //   getProduct();
  // }, []);




  return (
    <>
      {step ? (
        <StepOneWrap>
          <ScrollToTop />

          <FormInput title="이메일" placeholder="이메일을 입력해주세요" setSign={setSign} type="email">
            이메일
          </FormInput>
          <FormInput title="비밀번호" placeholder="비밀번호를 입력해주세요" setSign={setSign} type="password">
            비밀번호
          </FormInput>
          <FormInput
            title="비밀번호 확인"
            placeholder="비밀번호를 한번 더 입력해주세요"
            setSign={setSign}
          >
            비밀번호 확인
          </FormInput>

          <LoginBtn className="next__btn" onClick={stepOneNextClickHandler}>
            다음
          </LoginBtn>
        </StepOneWrap>
      ) : (
        <StepTwoWrap>
          <ScrollToTop />
          <div className="name__join__wrap">
            <FormInput title="성" placeholder="성" width="30%" setSign={setSign} type="lastName">
              성
            </FormInput>
            <FormInput title="이름" placeholder="이름" width="60%" setSign={setSign} type="firstName">
              이름
            </FormInput>
          </div>

          <FormInput title="닉네임" placeholder="닉네임을 입력해주세요" setSign={setSign} type="nickName">
            닉네임
          </FormInput>
          <FormInput title="전화번호" placeholder="-없이 입력해주세요" setSign={setSign} type="phone">
            전화번호
          </FormInput>

          <JoinTerms />

          <Link to="/join/joinDoen">
            <LoginBtn onClick={(e) => { Signup() }}>가입하기</LoginBtn>
          </Link>
        </StepTwoWrap>
      )}
    </>
  );
};

export default Join;
