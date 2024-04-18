import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const MyPageBtn = styled(Btn)`
  border-radius: 10px;
  font-size: 14px;
  height: 42px;
`;

export const RefundBtn = styled(MyPageBtn)`
  color: #565656;
  background-color: #f9f9f9;
`;

export const PurchaseBtn = styled(MyPageBtn)`
  color: #33c2ff;
  border: 1px solid #33c2ff;
  background-color: #ffffff;
`;

export const CommentBtn = styled(MyPageBtn)`
  background-color: #33c2ff;
  color: #ffffff;
`;

export const LoginBtn = styled(Btn)`
  color: #ffffff;
  background-color: #33c2ff;
`;

export const JoinBtn = styled(Btn)`
  color: #33c2ff;
  background-color: #f8f8f8;
`;

export const InfoFindBtn = styled(Btn)`
  font-weight: 500;
  color: #6c6c6c;
`;

export const BtnLink = styled(Link)`
  width: 100%;
`;

export const PopupCloseBtn = styled(Btn)`
  background-color: white;
  color: #33c2ff;
`;

export const LeaveBtn = styled(Btn)`
  background-color: #ffffff;
  color: #6c6c6c;
  border: 1px solid #6c6c6c;
`;

export const BuyBtn = styled(Btn)`
  color: #ffffff;
  background-color: #33c2ff;
`;

export const CartBtn = styled(Btn)`
  width: 75px;
  flex-shrink: 0;
  margin-right: 15px;
  background-color: #edf8ff;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ReplyBtn = styled(Btn)`
  width: 60px;
  font-size: 15px;
  font-weight: 500;
  color: #2eb4ff;
  background: none;
`;
