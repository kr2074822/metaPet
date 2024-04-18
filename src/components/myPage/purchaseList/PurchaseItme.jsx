import styled from "styled-components";
import { InfoBgBox } from "../InfoBgBox";
import listImg from "../../../assets/images/myPage/purchaseList/list__img.png";
import {
  CommentBtn,
  PurchaseBtn,
  RefundBtn,
} from "../../styled/UI/button/Button";
import { formatDate } from "../../../common/utils/formatDate";

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

      & .schedule__state {
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

const PurchaseItem = ({ data }) => {
  let formattedData = formatDate(data.date);
  let formattedTransferDate = formatDate(data.product.expectedDate);

  return (
    <Wrap>
      <div className="purchease__list__wrap">
        <p className="date__text">{formattedData}</p>

        <InfoBgBox height="132px">
          <div className="list__item__box">
            <img src={listImg} />

            <div className="item__product__info">
              <span className="product__info__title">{data.product.title}</span>
              <div className="product__info__wrap">
                <span>{data.product.point + "MET"}</span>
                <div></div>
                <span>{data.product.quantity + "개"}</span>
              </div>

              <div className="produce__info__schedule">
                {data.product.send_state ? (
                  <>
                    <span className="schedule__state--true">전송완료</span>
                  </>
                ) : (
                  <>
                    <span className="schedule__state--false">전송대기</span>
                  </>
                )}
                <span className="schedule__date">
                  {formattedTransferDate} 전송예정
                </span>
              </div>
            </div>
          </div>
        </InfoBgBox>

        <div className="list__btn__box">
          <RefundBtn>환불신청</RefundBtn>
          <PurchaseBtn>구매확정</PurchaseBtn>
          <CommentBtn>댓글작성</CommentBtn>
        </div>
      </div>
    </Wrap>
  );
};
export default PurchaseItem;
