import styled from "styled-components";
import celebMore from "../../../assets/images/common/celebMore.png";
import CelebInfo from "./CelebInfo";


const Item = styled.li`
    width: 100%;
    height: 60px;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & >img {
            width: 28px;
            height: 28px;
        }
    }
`;

function CelebList({celeb}) {
    return (
        <Item>
            <a href="#none">
                <CelebInfo celeb={celeb} />
                <img src={celebMore} />
            </a>
        </Item>
    )
}

export default CelebList;