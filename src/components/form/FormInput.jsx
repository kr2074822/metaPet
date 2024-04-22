import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || "100%"};

  input {
    width: 100%;
    height: 57px;
    border-radius: 16px;
    border: 1px solid #dfdfdf;
    padding: 18px 23px;
    color: #333333;
    font-size: 16px;
  }

  input::placeholder {
    color: #909090;
    font-size: 16px;
  }

  input:focus {
    border: 1px solid #33c2ff;
    outline: none !important;
  }

  label {
    width: 100%;
    p {
      margin-bottom: 10px;
      font-size: 16px;
      width: 100%;
    }
  }
`;

const FormInput = ({ title, type, userInput, placeholder, width, setSign, setUser }) => {
  const [isFocused, setIsFocused] = useState(false);

  const pHelper = isFocused ? "#33C2FF" : "#333333";

  function dataInsert(e) {
    if (setSign != undefined) {
      if (type == "email") {
        setSign((prev) => ({ ...prev, email: e.target.value }))
      }
      if (type == "password") {
        setSign((prev) => ({ ...prev, password: e.target.value }))
      }
      if (type == "lastName") {
        setSign((prev) => ({ ...prev, lastName: e.target.value }))
      }
      if (type == "firstName") {
        setSign((prev) => ({ ...prev, firstName: e.target.value }))
      }
      if (type == "nickName") {
        setSign((prev) => ({ ...prev, nickName: e.target.value }))
      }
      if (type == "phone") {
        setSign((prev) => ({ ...prev, phone: e.target.value }))
      }
    }
  }

  function login(e) {
    if (setUser != undefined) {
      if (type == "email") {
        setUser((prev) => ({ ...prev, email: e.target.value }))
      }
      if (type == "password") {
        setUser((prev) => ({ ...prev, password: e.target.value }))
      }
    }
  }

  return (
    <Wrap width={width}>
      <label htmlFor={userInput}>
        <p style={{ color: pHelper }}> {title}</p>
      </label>
      <input
        id={userInput}
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          dataInsert(e);
          login(e);
        }}
      />
    </Wrap>
  );
};
export default FormInput;
