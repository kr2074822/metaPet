import styled from "styled-components";
import { ReplyBtn } from "../../../components/styled/UI/button/Button";
import { useState } from "react";
import { db } from "../../../common/api/firebase";
import { ref, update } from "firebase/database";
import { uid } from "uid";
import { useSelector } from "react-redux";
import { getFormatDate } from "../../../common/utils/getFormatDate";

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border: 1px solid #33C2FF;
    border-radius: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    & > textarea {
        width: 100%;
        height:100%;
        outline: none;
        padding: 15px;
        border: none;
        font-size: 15px;
        font-weight: 500;
        color: #4D4D4D;
        resize: none;
    }
`;


function CommunityReply({ comment, setComment, product }) {
    const loginUser = useSelector((state) => state.loginUser.user);
    const [inputComment, setInputComment] = useState();
    const date = new Date();

    const addComment = () => {
        const uuid = uid();
        const temp = {
            comment: inputComment,
            parentUuid: "",
            productUuid: product.uuid,
            userUuid: loginUser.uuid,
            uuid: uuid,
            date: getFormatDate(date)
        };
        setComment((prev)=> [...prev, temp]);
        return update(ref(db, "/community/" + uuid), temp);
    };

    return (
        <Wrapper>
            <textarea type="text" placeholder="응원의 한마디 남기기" value={inputComment} onChange={(e) => { setInputComment(e.target.value) }} />
            <ReplyBtn onClick={(e) => { addComment(); setInputComment("") }}>완료</ReplyBtn>

        </Wrapper>
    )
}

export default CommunityReply;