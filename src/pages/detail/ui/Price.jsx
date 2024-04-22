import styled from "styled-components";
import { BuyBtn, CartBtn, PrepareBtn } from "../../../components/styled/UI/button/Button";
import cart from "../../../assets/images/common/cart_on_icon.png";
import likeOn from "../../../assets/images/common/like_on.png";
import likeOff from "../../../assets/images/common/like_off.png";
import CntInput from "./PriceInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arrToObj, objToArr } from "../../../common/utils/objToArr";
import { ref, remove, update } from "firebase/database";
import { db } from "../../../common/api/firebase";
import { loginStateChange } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { numberComma } from "../../../common/utils/numberFormat";
import { uid } from "uid";
import { getFormatDate } from "../../../common/utils/getFormatDate";

const Wrapper = styled.div`
    margin-bottom: 18px;
`;

const ProductPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
`;

const Like = styled.div`
    width: 40%;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
        margin-right: 14px;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
        
        img {
            border-radius: 100%;
            border: 1px solid #0000002E;
            width: 50px;
            height: 50px;
        }
    }

`;

const Sell = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & > span {
            display: block;
            font-size: 20px;
            font-weight: 500;
            color: #333333;

            &:first-child {
                margin-bottom: 5px;
            }

            &:last-child {
                font-size: 16px;
                font-weight: 400;
                color: #909090;
            }
        }
    }
`;

const ProductBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BeforeProduct = styled.div`
    font-size: 16px;
    font-weight: bold;
    font-weight: 400;
    font-size: 13px;

    & > span {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: none;
        color: #ffffff;
        background-color: #3F3F3F;

        & > span {
            display: block;
            margin-left: 8px;
            font-size: 18px;
            font-weight: 700;
        }
    }

`;

const AfterProduct = styled(BeforeProduct)`
    & > span {
        background-color: #D9D9D9;
    }
`;

const ProductCnt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    span {
        width: 100%;
        display: block;
        margin-right: 13px;
        font-size: 16px;
        font-weight: 500;
        color: #909090;
    }
`;



function Price({ product }) {
    const [dayCnt, setDayCnt] = useState("");
    const [productCount, setProductCount] = useState(1);
    const loginUser = useSelector((state) => state.loginUser.user);
    const navigate = useNavigate();

    // 현재 날짜 변경
    let date = new Date();
    function dateFormat(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        hour = hour >= 10 ? hour : '0' + hour;
        minute = minute >= 10 ? minute : '0' + minute;
        second = second >= 10 ? second : '0' + second;

        return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }

    // 컴포넌트 
    const isSameDateAndTime = (end, now) => {
        const endDate = new Date(end);
        const nowDate = new Date(now);
        return endDate.getTime() > nowDate.getTime();
    }

    // ------------------
    // D-day 카운트다운
    function find_day() {
        const targetDay = new Date(product.endDate);
        const today = new Date();

        let day_gap = targetDay - today;

        const day = Math.floor(day_gap / (1000 * 60 * 60 * 24));
        const hour = Math.floor(day_gap / (1000 * 60 * 60) % 24);
        const min = Math.floor(day_gap / (1000 * 60) % 60);
        const sec = Math.floor(day_gap / 1000 % 60);

        setDayCnt(`${day}일 ${hour}시간 ${min}분 ${sec}초`);
    }
    // setInterval(find_day, 1000);  //초마다 디데이 기능 실행

    const [userLike, setUserLike] = useState(objToArr(loginUser?.like));
    const [productLike, setProductLike] = useState(objToArr(product?.like));

    function likeToggleFn(e) {
        if (loginUser == null) {
            alert("로그인이 필요합니다.");
            navigate("/login");
        } else {
            if (userLike.filter((e) => e == product?.uuid).length > 0) {
                remove(ref(db, "/user/" + loginUser.uuid + "/like/" + product.uuid));
                remove(ref(db, "/product/" + product.uuid + "/like/" + loginUser.uuid));

                setProductLike(removeArr(productLike, loginUser.uuid));
                setUserLike(removeArr(userLike, product.uuid));
            } else {
                const userToggle = () => {
                    const temp = { [product.uuid]: product.uuid };
                    return update(ref(db, "/user/" + loginUser.uuid + "/like"), temp)
                };

                const productToggle = () => {
                    const temp = { [loginUser.uuid]: loginUser.uuid };
                    return update(ref(db, "/product/" + product.uuid + "/like"), temp)
                };
                userToggle();
                productToggle();
                setUserLike(prev => [...prev, product.uuid]);
                setProductLike(prev => [...prev, loginUser.uuid]);
            }

        }
    }

    function removeArr(arr, val) {
        let temp = arr;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === val) {
                temp.splice(i, 1);
            }
        }
        return temp;
    }


    function buyProduct() {
        if (loginUser) {
            // 구매
            let cash = loginUser.cash
            let total = (product.price * productCount);
            const productToggle = () => {
                const temp = { cash: cash - total };
                return update(ref(db, "/user/" + loginUser.uuid), temp)
            };
            productToggle()

            const addPurchase = () => {
                let uuid = uid();
                const date = new Date();

                const temp = {
                    uuid: uuid,
                    count: productCount,
                    date: getFormatDate(date),
                    price: product.price * productCount,
                    productUuid: product.uuid,
                    userUuid: loginUser.uuid,
                    nickName: loginUser.nickName
                };
                return update(ref(db, "/purchase/" + uuid), temp)

            }
            addPurchase();
            alert(`${product.title}의 제품을 ${productCount}개 구매했습니다.`);
            setProductCount(1)
        } else {
            alert("로그인 후 구매할 수 있습니다.");
            navigate("/login");
        }
    }

    return (
        <Wrapper>
            <ProductPrice>
                <Like>
                    <button onClick={(e) => { likeToggleFn(e) }}>
                        <img src={(userLike.filter((e) => e == product?.uuid).length > 0) ? likeOn : likeOff} />
                    </button>
                    <span>{productLike.length}</span>
                </Like>
                <Sell>
                    <li>
                        <span>판매가</span>
                        <span>KRW</span>
                    </li>
                    <li>
                        {/* <span>{product.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} MET</span> */}
                        <span>{numberComma(product.price)} MET</span>
                        {/* <span>{(product.price * 100 + "").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</span> */}
                        <span>{numberComma(product.price * 100 + "")} 원</span>
                    </li>
                </Sell>
            </ProductPrice>

            {
                (isSameDateAndTime(dateFormat(date), product.startDate)) === true && isSameDateAndTime(product.endDate, dateFormat(date)) === true ?
                    <ProductCnt>
                        <span>총 구매개수</span>
                        <CntInput product={product} setProductCount={setProductCount} productCount={productCount} />
                    </ProductCnt>
                    : null
            }

            {/* <ProductCnt>
                <span>총 구매개수</span>
                <CntInput />
            </ProductCnt> */}

            {/* <ProductBtn>
                <CartBtn><img src={cart} /></CartBtn>
                <BuyBtn>구매하기</BuyBtn>
            </ProductBtn>

            <BeforeProduct>
                <span>
                    아직 판매 전 입니다 <span>{dayCnt}</span>
                </span>
            </BeforeProduct>

            <AfterProduct>
                <span>
                    판매가 종료된 NFT 입니다.
                </span>
            </AfterProduct> */}


            {
                (isSameDateAndTime(dateFormat(date), product.startDate)) === true && isSameDateAndTime(product.endDate, dateFormat(date)) === true ?
                    <ProductBtn>
                        <CartBtn><img src={cart} /></CartBtn>
                        <BuyBtn onClick={() => { buyProduct() }}>구매하기</BuyBtn>
                    </ProductBtn>
                    : (isSameDateAndTime(dateFormat(date), product.startDate)) === true && isSameDateAndTime(product.endDate, dateFormat(date) === false) ?
                        <AfterProduct>
                            <span>
                                판매가 종료된 NFT 입니다.
                            </span>
                        </AfterProduct>

                        : (isSameDateAndTime(dateFormat(date), product.startDate)) === false && isSameDateAndTime(product.endDate, dateFormat(date) === false) ?
                            <BeforeProduct>
                                <span>
                                    아직 판매 전 입니다 <span>{dayCnt}</span>
                                </span>
                            </BeforeProduct>
                            : null
            }

        </Wrapper >
    )
}

export default Price;