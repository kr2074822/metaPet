import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 24px;
    font-size: 0;

    ul {
        width: 100%;
        padding: 20px 12px;
        border-radius: 10px;
        background: #F9F9F9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        li {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 12px;

            &:last-child {
                margin-bottom: 0;
            }

            span {
                font-size: 17px;
                font-weight: 400;
                line-height: 21px;
                color: #909090;

                &:last-child {
                    font-weight: 500;
                    color: #333333;
                }
            }

        }
    }
`;

function DetailInfo({product}) {
    return (
        <Wrapper>
            <ul>
                <li>
                    <span>contract address</span>
                    <span>{product.contactAddr}</span>
                </li>
                <li>
                    <span>token standard</span>
                    <span>{product.tokenStandard}</span>
                </li>
                <li>
                    <span>Blockchain</span>
                    <span>{product.blockchain}</span>
                </li>
                <li>
                    <span>Creator Fees address</span>
                    <span>{product.fees}%</span>
                </li>
            </ul>

        </Wrapper>
    )
}

export default DetailInfo;