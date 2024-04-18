import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../assets/images/common/dog_sample3.png';
import Tag from "../../pages/home/ui/Tag";

const Wrapper = styled.div`

`;

const ItemImg = styled.div`
    padding: 12px 0 0;

    & > img {
        object-fit: cover;
        width: 100%;
        height: 155px;
        height: ${(props) => (props.size == 'large' ? '382px' : '155px')};
        border-radius: 16px;
    }
`;

const ItemInfo = styled.div`
    padding: 20px 0 22px;
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

    & > p {
        margin-top: 10px;
        padding: 11px 14px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #333333;
        background: #F9F9F9;
        border-radius: 10px;
    }
`;

function ItemThumbnail({ size, product }) {
    return (
        <Wrapper>
            <ItemImg size={size}>
                {
                    product !== undefined ?
                        <img src={product.image} />
                        : null
                }
            </ItemImg>

            <ItemInfo>
                <ItemTitle>
                    {
                        product !== undefined ?
                            <>
                                <span>{product.productTitle}</span>
                                <Tag tag={product.productTag} />
                                <p>{product.description}</p>
                            </>
                            : null
                    }
                </ItemTitle>
            </ItemInfo>
        </Wrapper>
    )
}

export default ItemThumbnail;