import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../../assets/images/common/dog_sample3.png';
import share from '../../../assets/images/common/item_share_icon.png';
import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';
import 'swiper/css';
import { Link } from "react-router-dom";
import Tag from "./Tag";
import { useState } from "react";
import { getFormatDate } from "../../../common/utils/getFormatDate";

const SwiperWrap = styled(Swiper)`
    height: 450px;
    overflow: visible;
`;

const SlideItem = styled(SwiperSlide)`
    width: 80%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 18px 0 #0000000F;
    font-size: 0;
    height: 434px;
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

        &.sell {
            background: #33C2FF;
        }

        &.end {
            background: #3F3F3F;
        }
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
        cursor: pointer;

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
    cursor: pointer;

    img {
        width: 56px;
        height: 56px;
        border: 1px solid #0000000F;
    border-radius: 100%;

    }
`;


function FavSwipe({ product, userLike, randomProduct }) {
    let temp = product?.slice(0, 5);
    const today = new Date();

    // Link 이동 방지
    const shareBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };

    let endDate;

    const isSameDateAndTime = (now, end) => {
        const nowDate = new Date(now);
        const endDate = new Date(end);
        return endDate.getTime() > nowDate.getTime();
    }

    // function find_day() {
    //     const targetDay = new Date(endDate);
    //     const today = new Date();

    //     let day_gap = today - targetDay;
    //     const day = Math.floor(day_gap / (1000 * 60 * 60 * 24));
    //     const hour = Math.floor(day_gap / (1000 * 60 * 60) % 24);
    //     const min = Math.floor(day_gap / (1000 * 60) % 60);
    //     const sec = Math.floor(day_gap / 1000 % 60);

    //     setDayCnt(`${day}일 ${hour}시간 ${min}분 ${sec}초`);
    // }
    // setInterval(find_day, 1000);  //초마다 디데이 기능 실행

    return (
        <>
            <SwiperWrap
                slidesPerView={'auto'}
                spaceBetween={30}
                className="mySwiper"
            >
                {
                    temp !== undefined ?
                        temp.map((item, idx) => {
                            endDate = item.endDate;
                            return (
                                <SlideItem key={idx}>
                                    <Link to={"/detail/" + item.uuid} state={{ item: item, randomProduct: randomProduct, productAll: product }} >
                                        <ItemImg>
                                            <img src={item.image} />
                                            {
                                                isSameDateAndTime(today, item.startDate) == true ?
                                                    <span >판매 전</span>
                                                    : (isSameDateAndTime(today, item.endDate) == false) ?
                                                        <span className="end">판매 종료</span>
                                                        :  isSameDateAndTime(today, item.endDate) == true  ?
                                                            <span className="sell">판매 중</span>
                                                            : null
                                            }
                                            <button onClick={shareBtn}><img src={share} /></button>
                                        </ItemImg>

                                        <ItemInfo>
                                            <ItemTitle>
                                                <span>{item.title}</span>
                                                <Tag tag={item.productTag} />
                                            </ItemTitle>

                                            <ItemLike>
                                                <img src={(userLike.filter((e) => e == item?.uuid).length > 0) ? likeOn : likeOff} />
                                            </ItemLike>
                                        </ItemInfo>
                                    </Link>

                                </SlideItem>
                            )
                        })
                        : null
                }
            </SwiperWrap>
        </>
    )
}

export default FavSwipe;