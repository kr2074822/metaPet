import styled from "styled-components";
import { LoginLink } from "../../../components/styled/UI/link/Link";
import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';
import share from '../../../assets/images/common/item_share_icon.png';
import sampleImg from '../../../assets/images/common/dog_sample3.png';
import Tag from "../../home/ui/Tag";
import { Link } from "react-router-dom";

const Wrapper = styled.div`

`;

const FollowList = styled.div`
    margin-bottom: 70px;
`;

const FollowNone = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #565656;

    & > h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 13px;
    }

    & > span {
        font-size: 14px;
        font-weight: 600;
    }
`;

const LoginAlert = styled(FollowNone)`
    & > h1 {
        margin-bottom: 30px;
   }
`;

const Item = styled.li`
    position: relative;
    width: 100%;
    height: 434px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 18px 0 #0000000F;
    font-size: 0;
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const ItemImg = styled.div`

    & > img {
        object-fit: cover;
        width: 100%;
        height: 325px;
    }

    span {
        top: 20px;
        left: 20px;
        display: block;
        position: absolute;
        background: #FF5555;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: #FFFFFF;
        padding: 5px 10px;
    }

    button {
        padding: 0;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 100%;
        background: none;
        
        & > img {
            width: 46px;
            height: 46px;
        }
    }
`;


const ItemInfo = styled.div`
    padding: 17px 22px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemTitle = styled.div`

    & > span {
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        color: #333333;
    }

`;
const ItemLike = styled.button`
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: none;
    border: none;

    img {
        width: 56px;
        height: 56px;
        border: 1px solid #0000000F;
        border-radius: 100%;
    }
`;


function ListItem({ item, userLike, randomProduct }) {

    // Link 이동 방지
    const shareBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };
    // Link 이동 방지
    const likeBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };


    return (
        <Item>
            <Link to={"/detail/" + item?.uuid} state={{ item: item, randomProduct: randomProduct, userLike: userLike }}>
                <ItemImg>
                    <img src={item?.image} />
                    <button onClick={shareBtn} className="shareBtn"><img src={share} /></button>
                </ItemImg>

                <ItemInfo>
                    <ItemTitle>
                        <span>{item?.productTitle}</span>
                        <Tag tag={item.productTag} />
                    </ItemTitle>

                    <ItemLike onClick={likeBtn} className="likeBtn">
                        {/* <img src={likeOff} /> */}
                        <img src={(userLike?.filter((e) => e == item?.uuid).length > 0) ? likeOn : likeOff} />
                    </ItemLike>
                </ItemInfo>
            </Link>
        </Item>
    )
}

export default ListItem;