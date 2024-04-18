import { Link } from "react-router-dom";
import styled from "styled-components";

const DefaultLink = styled(Link)`
    display: block;
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #33C2FF;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 100px;
`;

export const MainLink = styled(DefaultLink)`
    background: #33C2FF;
    color: #FFFFFF;
`;

export const LoginLink = styled(DefaultLink)`
    height: 60px;
    background: #F9FDFF;
    font-weight: 700;
    color: #2EB4FF;
    border: 1px solid #33C2FF;
    margin-bottom: 20px;
`;

