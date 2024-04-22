import styled from "styled-components";
import likeOn from '../../assets/images/common/like_on.png';
import likeOff from '../../assets/images/common/like_off.png';
import Tag from "../../pages/home/ui/Tag";
import { Link } from "react-router-dom";
import ScrollToTop from "../../common/utils/scrollToTop";
import { shuffleArray } from "../../common/utils/shuffleArray";

const Wrapper = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        li {
            width: 48%;
            padding: 12px;
            border: 1px solid #F2F2F2;
            border-radius: 21px;
            margin-bottom: 13px;
            box-shadow: 0 4px 10px 0 #0000000F;
        }
    }
`;

const Item = styled(Link)`

`;


const ItemImg = styled.div`
    padding: 12px 0 0;
    position: relative;

    & > img {
        object-fit: cover;
        width: 100%;
        height: 164px;
        border-radius: 16px;
    }

    button {
        position: absolute;
        width: 34px;
        height: 34px;
        bottom: 16px;
        right: 12px;
        border: none;
        border-radius: 100%;
        padding: 0;
        margin: 0;
        font-size: 0;

        & > img {
            position: relative;
            top: 0px;
            left: 0px;
            width: 34px;
        }
    }
`;

const ItemInfo = styled.div`
    padding: 20px 0 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemTitle = styled.div`

    & > span {
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        color: #333333;
    }
`;


function Product({ product, userLike, productAll, randomProduct, setType }) {
    let collectionItem = [];
    let temp = shuffleArray(randomProduct);
    temp = temp?.slice(0, 4)
    ScrollToTop()
    const likeBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };

    function filterCollection() {
        let temp = [];

        productAll?.filter((val, i) => {
            product?.filter((item, idx) => {
                if (val.uuid == item) {
                    temp.push(val);
                }
            })
        });
        return temp
    }
    collectionItem = filterCollection();

    return (
        <Wrapper>
            <ul>
                {
                    collectionItem.length > 1 ?
                        collectionItem.map((item, idx) => {
                            return (
                                <li key={idx} >
                                    <Item to={"/detail/" + item.uuid} state={{ item: item, productAll: productAll, randomProduct: randomProduct }}>
                                        <ItemImg>
                                            <img src={item.image} />
                                            <button onClick={likeBtn}>
                                                <img src={(userLike.filter((e) => e == item?.uuid).length > 0) ? likeOn : likeOff} />
                                            </button>
                                        </ItemImg>

                                        <ItemInfo>
                                            <ItemTitle>
                                                <span>{item.title}</span>
                                                <Tag tag={item.productTag} />
                                            </ItemTitle>
                                        </ItemInfo>
                                    </Item>
                                </li>

                            )
                        })
                        :
                        temp.map((item, idx) => {
                            return (
                                <li key={idx} onClick={() => { setType('story') }}>
                                    <Item to={"/detail/" + item.uuid} state={{ item: item, productAll: productAll, randomProduct: randomProduct }}>
                                        <ItemImg>
                                            <img src={item.image} />
                                            <button onClick={likeBtn}>
                                                <img src={(userLike.filter((e) => e == item?.uuid).length > 0) ? likeOn : likeOff} />
                                            </button>
                                        </ItemImg>

                                        <ItemInfo>
                                            <ItemTitle>
                                                <span>{item.title}</span>
                                                <Tag tag={item.productTag} />
                                            </ItemTitle>
                                        </ItemInfo>
                                    </Item>
                                </li>

                            )
                        })
                }
            </ul>
        </Wrapper>
    )
}

export default Product;