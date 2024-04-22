import styled from "styled-components";
import celebMore from "../../../assets/images/common/celebMore.png";
import CelebInfo from "./CelebInfo";
import { Link } from "react-router-dom";


const Item = styled.li`
    width: 100%;
    height: 60px;
`;

const CelebLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & >img {
        width: 28px;
        height: 28px;
    }
`;

function CelebList({ celeb }) {
    return (
        <Item>
            <CelebLink to={"/celeb/" + celeb.uuid} state={{ item: celeb }}>
                <CelebInfo celeb={celeb} />
                <img src={celebMore} />
            </CelebLink>
        </Item>
    )
}

export default CelebList;