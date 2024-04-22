import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginLink } from "../../../components/styled/UI/link/Link";
import CommunityReply from "./CommunityReply";
import ReplyList from "./ReplyList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { objToArr } from "../../../common/utils/objToArr";
import { ref, child, get, update } from "firebase/database";
import { db } from "../../../common/api/firebase";

const Wrapper = styled.div`
    margin-bottom: 24px;
`;


const CommunityTitle = styled.div`
    margin-bottom: 33px;

    h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        color: #333333;
        margin-bottom: 16px;
        }

    span {
        display: flex;
        font-size: 16px;
        font-weight: 500;
        color: #565656;
        margin-bottom: 13px;
        }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #565656;
        }
`;

function DetailCommunity({product}) {
    const loginState = useSelector((state) => state.loginState);
    const celeb = useSelector((state) => state.celeb.celeb);
    const [allUser, setAllUser] = useState(objToArr(celeb));
    const [comment, setComment] = useState();


    useEffect(() => {
        // 댓글 데이터
        async function getComment() {
            const dbRef = ref(db);
            await get(child(dbRef, "/community"))
                .then(snapshot => {
                    if (snapshot.exists()) {
                        // 배열로 반환
                          let temp = objToArr(snapshot.val())

                          let commentFilter = temp.filter((item, idx)=> product.uuid== item.productUuid);
                          setComment(commentFilter);
                    } else {
                        console.log("No data available");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
        getComment();

    }, []);


    return (
        <Wrapper>
            <CommunityTitle>
                <h1>
                    여러분의 한마디가 <br />
                    셀럽에게 큰 힘이됩니다
                </h1>

                <span>댓글 작성 시 유의사항</span>

                <p>
                    프로젝트와 관계없는 글, 광고성, 욕설, 비방, 도배 등의 글은 내부 검토 후 삭제됩니다. <br />
                    <br />
                    NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                </p>
            </CommunityTitle>
            {
                loginState.value === undefined ?
                    <LoginLink to="/login">로그인 후 댓글 달기</LoginLink>
                    : <CommunityReply comment={comment} setComment={setComment} product={product} />

            }
            <ReplyList allUser={allUser} comment={comment} setComment={setComment} product={product} />
        </Wrapper>
    )
}

export default DetailCommunity;