import { useState } from "react";
import styled from "styled-components";

const FormTextarea = styled.div`
  textarea {
    width: 100%;
    height: 150px;
    border-radius: 16px;
    border: 1px solid #dfdfdf;
    padding: 18px 23px;
    color: #333333;
    font-size: 16px;
    resize: none;
  }

  textarea::placeholder {
    color: #909090;
    font-size: 16px;
  }

  textarea:focus {
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

// FormTextarea를 사용하는 컴포넌트
const MyFormTextarea = ({ title, userInput, placeholder, width }) => {
  const [isFocused, setIsFocused] = useState(false);
  const pHelper = isFocused ? "#33C2FF" : "#333333";

  return (
    <FormTextarea title={title} userInput={userInput} width={width}>
      <label htmlFor={userInput}>
        <p style={{ color: pHelper }}> {title}</p>
      </label>
      <textarea
        id={userInput}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </FormTextarea>
  );
};

export default MyFormTextarea;
