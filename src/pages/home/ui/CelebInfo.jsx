import styled from "styled-components";
import imgSample from "../../../assets/images/common/user_img.png";



const Item = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    span {
        font-size: 16px;
        font-weight: 20px;
        color: #333333;
    }

    img {
        margin-right: 14px;
        width: 46px;
        height: 46px;
    }
`;

function CelebInfo({celeb}) {
    return (
        <Item>
            <img src={celeb.image} />
            <span>{celeb.nickName}</span>
        </Item>
    )
}

export default CelebInfo;