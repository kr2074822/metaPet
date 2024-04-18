import styled from "styled-components";
import profile from "../../assets/images/myPage/profile.png";
import arrow from "../../assets/images/myPage/arrow.png";
import { Link } from "react-router-dom";
import { InfoBgBox } from "../../components/myPage/InfoBgBox";
import { useDispatch, useSelector } from "react-redux";
import { headerChange, menuChange } from "../../store/store";
import { useEffect } from "react";
import { objToArr } from "../../common/utils/objToArr";
import { numberComma } from "../../common/utils/numberFormat";

const Wrap = styled.div`
  padding: 9px 16px 85px;
  .mypage__wrap {
    padding: 16px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    &__left > p {
      font-size: 18px;
      font-weight: 500;
    }

    &__point {
      display: flex;
      flex-direction: column;

      & > span:first-child {
        font-size: 12px;
        color: #909090;
        margin-top: 13px;
        margin-bottom: 2px;
      }

      & > span:last-child {
        font-size: 16px;
        font-weight: 500;
        color: #333333;
      }
    }

    .profile__img {
      width: 91px;
      height: 91px;
      border-radius: 100%;
    }
  }

  .mypage__activity__title {
    font-weight: 500;
    font-size: 16px;
    margin: 25px 0 12px;
  }

  .activity__items__wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  .page__list__wrap {
    margin-top: 43px;
    & > li:not(:first-child) {
      margin-top: 40px;
    }

    & .page__list__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20px;
    }
  }
`;

const InfoItem = styled.div`
  text-align: center;

  .info__item__title {
    font-size: 18px;
    font-weight: 500;
  }

  .info__item__number {
    font-size: 14px;
    margin-top: 5px;
  }
`;

const MyPage = () => {
  const loginUser = useSelector((state) => state.loginUser.user);
  console.log(loginUser);

  const infoTitleText = [
    {
      title: "좋아요",
      number: numberComma(objToArr(loginUser.like).length),
    },

    {
      title: "응원한",
      number: numberComma(0),
    },

    {
      title: "구매 한",
      number: numberComma(0),
    },

    {
      title: "보유한",
      number: numberComma(objToArr(loginUser.product).length),
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerChange({
      type: 't1',
      title: 'home',
    }))
    dispatch(menuChange('user'));
  }, []);
  

  return (
    <Wrap>
      <InfoBgBox height="123px">
        <div className="mypage__wrap">
          <div className="mypage__wrap__left">
            <p>{loginUser.nickName}</p>

            <div className="mypage__wrap__point">
              <span>보유 MET</span>
              <span>{numberComma(loginUser.cash)}</span>
            </div>
          </div>

          <img className="profile__img" src={loginUser.image} />
        </div>
      </InfoBgBox>

      <div className="mypage__activity__wrap">
        <p className="mypage__activity__title">나의 활동내역</p>

        <InfoBgBox height="79px">
          <div className="activity__items__wrap">
            {infoTitleText.map((v, i) => (
              <InfoItem key={i}>
                <span className="info__item__title">{v.number}</span>
                <p className="info__item__number">{v.title}</p>
              </InfoItem>
            ))}
          </div>
        </InfoBgBox>
      </div>

      <ul className="page__list__wrap">
        <li>
          <Link to="/myPage/purchaseList">
            <div className="page__list__item">
              <span>구매목록</span>
              <img src={arrow} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="">
            <div className="page__list__item">
              <span>응원관리</span>
              <img src={arrow} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="">
            <div className="page__list__item">
              <span>MET 충전</span>
              <img src={arrow} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="/myPage/deliveryAddress">
            <div className="page__list__item">
              <span>배송지관리</span>
              <img src={arrow} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="">
            <div className="page__list__item">
              <span>고객센터</span>
              <img src={arrow} />
            </div>
          </Link>
        </li>

        <li>
          <Link to="">
            <div className="page__list__item">
              <span>회사소개</span>
              <img src={arrow} />
            </div>
          </Link>
        </li>
      </ul>
    </Wrap>
  );
};
export default MyPage;
