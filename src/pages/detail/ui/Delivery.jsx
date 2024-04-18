import styled from "styled-components";
import calender from "../../../assets/images/detail/calender_icon.png";
import card from "../../../assets/images/detail/card_icon.png";
import gift from "../../../assets/images/detail/gift_icon.png";

const Wrapper = styled.div`
    padding: 17px 0px;
    border: 1px solid #ECECEC;
    border-radius: 10px;
    margin-bottom: 40px;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            &:nth-child(2):after {
                content: '';
                position: absolute;
                width: 200%;
                height: 1px;
                top: 19px;
                z-index: -1;

                border-bottom: 1px dashed #426BFF26;

            }

            img {
                width: 38px;
                height: 38px;
                margin-bottom: 16px;
            }

            span {
                display: block;
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
                color: #909090;
                margin-bottom: 5px;

                &:last-child {
                    font-size: 16px;
                    font-weight: 500;
                    color: #333333;
                    margin-bottom: 0;
                }
            }
        }
    }
`;

function DetailDelivery({product}) {
    return (
        <Wrapper>
            <ul>
                <li>
                    <img src={calender} />
                    <span>판매종료일</span>
                    <span>{product.endDate.substr(0,10).replaceAll('-', '. ')}</span>
                    {/* <span>22. 05. 31</span> */}
                </li>
                <li>
                    <img src={card} />
                    <span>구매 확인일</span>
                    <span>{product.endDate.substr(0,10).replaceAll('-', '. ')}</span>
                </li>
                <li>
                    <img src={gift} />
                    <span>전송예정일</span>
                    <span>22. 06. 07</span>
                </li>
            </ul>
        </Wrapper>
    )
}

export default DetailDelivery;