import styled from "styled-components";
import sampleImg from "../../../assets/images/common/dog_sample1.png"
import moreArrow from "../../../assets/images/detail/moreArrow.png"
import replyArrow from "../../../assets/images/detail/replyArrow.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentInfo from "./Comment";

const Wrapper = styled.div`
    margin-bottom: 24px;
`;

const Comment = styled.li`
    margin-bottom: 18px;

`;

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

    & > input {
        width: 100%;
        height: 100%;
        padding: 14px;
        border: none;
        outline: none;
    background: #F9F9F9;

    }

    & > button {
        width: 72px;
        height: 100%;
        flex-shrink: 0;
        border: none;
        outline: none;
        background: #F9F9F9;
        padding: 0;
    }


`;

const Reply = styled.ul`
    margin-top: 10px;
    margin-left: 30px;

    & > li {
        position: relative;

        &::before {
            width: 10px;
            height: 10px;
            object-fit: cover;
            position: absolute;
            top: 8px;
            left: -25px;
            content: "";
            background: url(${replyArrow});
            background-size: 10px 10px;
            background-repeat: no-repeat;
        }
    }


`;



function ReplyList({ allUser, comment, setComment, product }) {
    const [firstComment, setFirstComment] = useState();
    const [secondComment, setSecondComment] = useState();

    useEffect(() => {
        if (comment != null) {
            let resultNew = comment.sort((a, b) => a.date.toLowerCase() < b.date.toLowerCase() ? -1 : 1);
            setComment(resultNew);

            let tempFirst = [];
            let tempSecond = [];
            for (let i = 0; i < resultNew.length; i++) {
                if (resultNew[i].parentUuid === "") {
                    tempFirst.push(resultNew[i]);
                } else {
                    tempSecond.push(resultNew[i]);
                }
            }
            setFirstComment(tempFirst)
            setSecondComment(tempSecond)
        }
    }, [comment])

    return (
        <Wrapper>

            <ul>
                {
                    firstComment &&
                    firstComment.map((comment, idx) => {
                        return (
                            <Comment key={idx}>
                                <CommentInfo comment={comment} allUser={allUser} product={product} setComment={setComment} parentUuid={comment.uuid} />
                                {

                                }
                                <Reply>
                                    {
                                        secondComment.map((reply, idx) => {
                                            if (comment.uuid === reply.parentUuid) {
                                                return (
                                                    <Comment key={idx}>
                                                        <CommentInfo comment={reply} allUser={allUser} setComment={setComment} product={product} parentUuid={comment.uuid} />
                                                    </Comment>
                                                )
                                            } 
                                        })
                                    }
                                </Reply>
                            </Comment>
                        )
                    })
                }


                {/* 
                <Comment>
                    <CommentInfo />
                    <Reply>
                        <Comment>
                            <CommentInfo />
                        </Comment>
                    </Reply>
                </Comment> */}




                {/* <Comment>
                    <User>
                        <UserLink to="/" >
                            <img src={sampleImg} />
                            <span>good monkey</span>
                        </UserLink>
                        <span>NFT구매자</span>
                    </User>

                    <ReplyToggle>
                        <span>4시간 전</span>
                        <button>답글 숨기기</button>
                    </ReplyToggle>

                    <CommentText>
                        <p>
                            NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                            NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                        </p>
                        <button> 더보기 <img src={moreArrow} /></button>
                    </CommentText>

                    <ReplyInput>
                        <input type="text" placeholder="답글 작성하기" />
                        <button>작성하기</button>
                    </ReplyInput>

                    <Reply>

                        <Comment>
                            <User>
                                <UserLink to="/" >
                                    <img src={sampleImg} />
                                    <span>good monkey</span>
                                </UserLink>
                                <span>NFT구매자</span>
                            </User>

                            <ReplyToggle>
                                <span>4시간 전</span>
                                <button>답글 숨기기</button>
                            </ReplyToggle>

                            <CommentText>
                                <p>
                                    NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                                    NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                                </p>
                                <button> 더보기 <img src={moreArrow} /></button>
                            </CommentText>

                            <ReplyInput>
                                <input type="text" placeholder="답글 작성하기" />
                                <button>작성하기</button>
                            </ReplyInput>
                        </Comment>
                    </Reply>
                </Comment> */}
            </ul>
        </Wrapper>
    )
}

export default ReplyList;