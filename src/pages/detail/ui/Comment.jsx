import styled from "styled-components";
import sampleImg from "../../../assets/images/common/dog_sample1.png"
import moreArrow from "../../../assets/images/detail/moreArrow.png"
import replyArrow from "../../../assets/images/detail/replyArrow.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ref, update } from "firebase/database";
import { db } from "../../../common/api/firebase";
import { getFormatDate } from "../../../common/utils/getFormatDate";
import { uid } from "uid";


const User = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > span {
        font-size: 14px;
        font-weight: 400;
        color: #33C2FF;
        padding: 4px 6px;
        background: #F7FCFF;
        border-radius: 6px;
    }

`;

const UserLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 13px;

    & > img {
        width: 34px;
        height: 34px;
        border-radius: 20px;
        object-fit: cover;
        margin-right: 10px;
    }


    & > span {
        display: block;
        font-size: 16px;
        font-weight: 500;
        color: #333333;
    }

`;

const ReplyToggle = styled.div`
    margin-left: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    & > span {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
    }

    & > button {
        font-size: 14px;
        font-weight: 500;
        color: #565656;
        background: none;
        border: none;
        cursor: pointer;

    }
`;

const CommentText = styled.div`
    background: #F9F9F9;
    border-radius: 10px;
    padding: 9px 12px;
    margin-bottom: 8px;

    & > p {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        color: #4D4D4D;

        margin-bottom: 10px;
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        padding: 0;

        font-size: 12px;
        font-weight: 400;
        line-height: 20px;

        & > img {
            width: 3px;
            height: 6px;
            margin-left: 7px;
        }
    }



`;

const ReplyInput = styled.div`
    width: 100%;
    height: 48px;
    background: #F9F9F9;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > textarea {
        width: 100%;
        height: 100%;
        padding: 14px;
        border: none;
        outline: none;
        background: #F9F9F9;
        resize: none
    }

    & > button {
        width: 72px;
        height: 100%;
        flex-shrink: 0;
        border: none;
        outline: none;
        background: #F9F9F9;
        padding: 0;
        cursor: pointer;
    }


`;



function CommentInfo({ comment, allUser, product, parentUuid, setComment }) {
    let user = allUser?.filter((item, idx) => (item.uuid == comment?.userUuid));

    const loginUser = useSelector((state) => state.loginUser.user);
    const [inputReply, setInputReply] = useState();
    const date = new Date();

    const addReply = () => {
        const uuid = uid();
        const temp = {
            comment: inputReply,
            parentUuid: parentUuid,
            productUuid: product.uuid,
            userUuid: loginUser.uuid,
            uuid: uuid,
            date: getFormatDate(date)
        };
        setComment((prev) => [...prev, temp]);
        return update(ref(db, "/community/" + uuid), temp);
    };

    return (
        <>
            <User>
                <UserLink to="/" >
                    <img src={user?.[0].image} />
                    <span>{user?.[0].nickName}</span>
                </UserLink>
                {/* <span>NFT구매자</span> */}
            </User>

            <ReplyToggle>
                <span>{comment?.date}</span>
                {/* {
                    comment.parentUuid === "" ?
                        <button>답글 숨기기</button>
                        : null
                } */}
            </ReplyToggle>

            <CommentText>
                <p>{comment?.comment}</p>
                {/* <button> 더보기 <img src={moreArrow} /></button> */}
            </CommentText>

            {
                comment.parentUuid === "" ?
                    <ReplyInput>
                        <textarea type="text" placeholder="답글 작성하기" value={inputReply} onChange={(e)=>{setInputReply(e.target.value)}} />
                        <button onClick={() => { addReply(); setInputReply("")}}>작성하기</button>
                    </ReplyInput>
                    : null
            }
        </>
    )
}

export default CommentInfo;