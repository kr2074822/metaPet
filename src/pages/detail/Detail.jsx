import styled from "styled-components";
// import sampleImg from '../../../assets/images/common/dog_sample3.png';
import ItemThumbnail from "../../components/thumnail/Thumnail";
import sampleUser from '../../assets/images/common/user_img.png';
import shareIcon from '../../assets/images/common/share_icon.png';
import { Link, useLocation } from "react-router-dom";
import DetailTab from "./ui/DetailTab";
import DetailStory from "./ui/DetailStory";
import DetailInfo from "./ui/DetailInfo";
import DetailFollower from "./ui/DetailFollower";
import DetailDelivery from "./ui/Delivery";
import Price from "./ui/Price";
import DetailRecommend from "./ui/DetailRecommend";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuChange } from "../../store/store";
import DetailCommunity from "./ui/DetailCommunity";
import NotFound from "../../components/layout/NotFound";
import { objToArr } from "../../common/utils/objToArr";

const Wrapper = styled.div`
    padding: 0px 16px;

`;

const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserInfo = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > img {
        width: 40px;
        height: 40px;
        margin-right: 13px;
    }

    & > span {
        font-size: 18px;
        font-weight: 600;
        color: #333333;
    }

`;

const Share = styled.div`
    & > button {
        background: none;
        border: none;

        & > img {
            width: 22px;
            height: 22px;
        }
    }
`;

const ItemDetail = styled.div`
`;

function Detail() {
    const location = useLocation();
    const loginUser = useSelector((state) => state.loginUser.user);
    const product = location.state.item;
    const productAll = location.state.productAll;
    const randomProduct = location.state.randomProduct;
    const dispatch = useDispatch();
    const [type, setType] = useState('story');

    useEffect(() => {
        dispatch(menuChange('product'));
        setType('story')
    }, [])

    return (
        <>
            {product ?
                <Wrapper>
                    <User>
                        <UserInfo>
                            <img src={sampleUser} />
                            <span>good monkey</span>
                        </UserInfo>
                        <Share>
                            <button><img src={shareIcon} /></button>
                        </Share>
                    </User>

                    <ItemDetail>
                        <ItemThumbnail product={product} size='large'></ItemThumbnail>
                    </ItemDetail>
                    <Price product={product} loginUser={loginUser} />
                    {/* <DetailDelivery product={product} /> */}
                    <DetailTab setType={setType} type={type} />
                    {
                        type === 'story' ?
                            <DetailStory image={product.storyImage} />
                            : type === 'info' ?
                                <DetailInfo product={product} />
                                : type === 'community' ?
                                    <DetailCommunity product={product} />
                                    : <DetailFollower product={product} />
                    }
                    <DetailRecommend setType={setType} randomProduct={randomProduct} userLike={objToArr(loginUser?.like)} productAll={productAll} />
                </Wrapper>
                : <NotFound />}
        </>
    )
}

export default Detail;