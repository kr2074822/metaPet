import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 32px;

    h1 {
        font-size: 24px;
        font-weight: bold;
        line-height: 32px;
        color: #333333;
        margin-bottom: 12px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #565656;
    }
`;


function Title({ title, sub }) {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <p>{sub}</p>
        </Wrapper>
    )
}

export default Title;