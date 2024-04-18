import styled from "styled-components";
import checkImg from "../../assets/images/join/check.png";

const Wrap = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: flex;
    width: 14px;
    height: 14px;
    border: 1px solid #33c2ff;
    position: relative;
    border-radius: 1px;
    white-space: nowrap;
    align-items: center;
  }

  input[id="loginState"]:checked + label::after {
    content: "";
    background-image: url(${checkImg});
    background-size: cover;
    width: 14px;
    height: 11px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  span {
    font-size: 14px;
    margin-left: 21px;
  }
`;

const FormCheckBox = () => {
  return (
    <Wrap>
      <input id="loginState" type="checkbox" />
      <label
        className="checkbox__label"
        img={checkImg}
        htmlFor="loginState"
      >
        <span htmlFor="loginState">
        로그인 상태 유지
      </span>
      </label>
      
    </Wrap>
  );
};

export default FormCheckBox;
