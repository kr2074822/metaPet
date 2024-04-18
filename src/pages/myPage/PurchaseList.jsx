import styled from "styled-components";
import { InfoBgBox } from "../../components/myPage/InfoBgBox";
import listImg from "../../assets/images/myPage/purchaseList/list__img.png";
import {
  CommentBtn,
  PurchaseBtn,
  RefundBtn,
} from "../../components/styled/UI/button/Button";
import PurchaseItem from "../../components/myPage/purchaseList/PurchaseItme";

const Wrap = styled.div`
  .purchease__list__wrap {
    padding: 18px 28px;

    .date__text {
      font-size: 14px;
      font-weight: 500;
      color: #909090;
      margin-bottom: 8px;
    }

    .list__wrap__item {
      background-color: #f9f9f9;
      height: 132px;
    }
  }

  & .purchease__list__wrap:not(:first-child) {
    border: 4px solid #f9f9f9;
  }

  .list__item__box {
    padding: 0 13px;
    display: flex;
    align-items: center;
    height: 100%;

    .product__info__title {
      font-size: 20px;
      font-weight: 500;
    }

    .item__product__info {
      margin-left: 17px;
    }

    .product__info__wrap {
      display: flex;
      align-items: center;
      margin: 4px 0 16px;
      & > span {
        font-size: 14px;
        color: #333333;
      }

      & > div {
        width: 1px;
        height: 8px;
        background-color: #d1d1d1;
        margin: 0 6px;
      }
    }

    .produce__info__schedule {
      display: flex;
      align-items: center;

      & > span:first-child {
        margin-right: 4px;
      }

      & .schedule__state--true {
        color: #33c2ff;
      }

      & .schedule__state--false {
        color: #33c2ff;
      }

      & .schedule__date {
        color: #6c6c6c;
      }
    }
  }

  .list__btn__box {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
    margin-top: 6px;

    & button {
      width: 32%;
    }
  }
`;

const PurchaseList = () => {
  const dateData = [
    {
      date: "06.18 22:51:16",
      product: {
        title: "metapet",
        point: 500,
        quantity: 1,
        send_state: false,
        expectedDate: "06.22 22:51:16",
      },
    },
    {
      date: "04.20 22:51:16",
      product: {
        title: "metapet2",
        point: 1000,
        quantity: 2,
        send_state: true,
        expectedDate: "06.22 22:51:16",
      },
    },
  ];

  return (
    <Wrap>
      {dateData.map((v, i) => (
        <PurchaseItem key={i} data={v} />
      ))}
    </Wrap>
  );
};
export default PurchaseList;
