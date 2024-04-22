import styled from "styled-components";
import ItemThumbnail from "../../../components/thumnail/Thumnail";
import Product from "../../../components/product/Product";

const Wrapper = styled.div`
    margin-bottom: 30px;

    & > span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        color: #333333;
        margin-bottom: 17px;
    }

`;

function DetailRecommend({ randomProduct, userLike, productAll, setType }) {
    return (
        <Wrapper>
            <span>이런 NFT는 어떠신가요?</span>
            <Product setType={setType} randomProduct={randomProduct} userLike={userLike} productAll={productAll} />
        </Wrapper>
    )
}

export default DetailRecommend;