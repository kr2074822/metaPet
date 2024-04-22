import styled from "styled-components";
import userSample from "../../../assets/images/common/user_img.png"
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    margin-bottom: 24px;

    & > span {
        display: block;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        color: #333333;
        margin-bottom: 16px;

        & > span {
            color: #2CC0FF;
        }
    }

    ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        li {
            width: 100%;
            padding: 14px 0;
            display: flex;
            justify-content: left;
            align-items: center;
            border-bottom: 1px solid #EDEDED;

            img {
                width: 34px;
                height: 34px;
                margin-right: 15px;
            }
        }
    }
`;

const History = styled.div`
    
    span {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #333333;
        margin-bottom: 7px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

function DetailFollower({ product }) {
    const userPurchase = useSelector((state) => state.userPurchase.userPurchase);
    let temp = userPurchase.filter((item, idx) => (item.productUuid == product.uuid))

    return (
        <Wrapper>
            <span>
                현재 이 NFT 프로젝트에 <br />
                <span>{temp.length}명</span>의 구매자들이 <br />
                참여하였습니다.
            </span>

            <ul>

                {
                    temp &&
                    temp.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <img src={userSample} />
                                <History>
                                    <span>{item.nickName}님이 NFT를 {item.count}개 구매하였습니다.</span>
                                    <span>{item.date}</span>
                                </History>
                            </li>
                        )
                    })
                }
            </ul>
        </Wrapper>
    )
}

export default DetailFollower;