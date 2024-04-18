import styled from "styled-components";
import sampleImg from '../../../assets/images/common/dog_sample1.png';
import instagram from '../../../assets/images/common/instagram_icon.png';
import youtube from '../../../assets/images/common/youtube_icon.png';

import { Link, useLocation } from "react-router-dom";
import Product from "../../../components/product/Product";
import { objToArr } from "../../../common/utils/objToArr";
import { useSelector } from "react-redux";
import { shuffleArray } from "../../../common/utils/shuffleArray";

const Wrapper = styled.div`

`;

const CelebInfo = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;
    padding: 0 16px;

    & > p {
        width: 100%;
        padding: 30px 20px;
        background: #F9F9F9;
        border-radius: 18px;
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #565656;
    }

`;


const Celeb = styled.div`
    width: 300px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 40px;

    & > img {
            width: 82px;
            height: 82px;
            object-fit: cover;
            border-radius: 100%;
            margin-right: 15px;
    }
`;


const CelebSNS = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    & > span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        color: #333333;
        margin-bottom: 11px;
    }

    & > ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & > li {
            margin-right: 5px;

            &:last-child {
                margin-right: 0;
            }

            & > a{

                & >  img {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }
`;

const SNSitem = styled(Link)`
    & > img {
        width: 32px;
        height: 32px;
    }
`;


const CelebFollow = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 35px;


    & > li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & > span {
            display: block;
            font-size: 19px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 3px;

            &:last-child {
                font-size: 14px;
                font-weight: 400;
                color: #565656;
            }
        }
    }

`;



const CollList = styled.div`

`;



function CelebDetail() {
    const location = useLocation();
    const userInfo = location.state.item;

    const product = useSelector((state) => state.product.product);
    const userLike = useSelector((state) => state.userLike.like);

    console.log(userLike);
    console.log(product);
    console.log(userInfo.product);
    console.log(userInfo);


    function filterProduct() {
        let temp = [];

        product?.filter((val, i) => {
            objToArr(userInfo.product)?.filter((item, idx) => {
                if (val.uuid == item) {
                    temp.push(val);
                }
            })
        });
        return temp;
    }

    console.log( filterProduct() );


    return (
        <Wrapper>
            <CelebInfo>
                <Celeb>
                    <img src={userInfo.image} />
                    <CelebSNS>
                        <span>{userInfo.nickName}</span>
                        <ul>
                            <li>
                                <a href="/"><img src={instagram} /></a>
                            </li>
                            <li>
                                <a href="/"><img src={youtube} /></a>
                            </li>
                        </ul>
                    </CelebSNS>
                </Celeb>

                <CelebFollow>
                    <li>
                        <span>{objToArr(userInfo.product).length}</span>
                        <span>등록 제품</span>
                    </li>
                    <li>
                        <span>{objToArr(userInfo.follower).length}</span>
                        <span>팔로워</span>
                    </li>
                    <li>
                        <span>{objToArr(userInfo.following).length}</span>
                        <span>팔로잉</span>
                    </li>
                </CelebFollow>

                <p>{userInfo.bio}</p>
            </CelebInfo>

            <CollList>
                {/* <Product /> */}
                <Product userLike={userLike} productAll={product} randomProduct={filterProduct()}/> 
            </CollList>




        </Wrapper>
    )
}

export default CelebDetail;