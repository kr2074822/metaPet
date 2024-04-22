import styled from "styled-components";
import { InfoBgBox } from "../../components/myPage/InfoBgBox";
import { LoginBtn } from "../../components/styled/UI/button/Button";

const Wrap = styled.div`
  padding: 17px 28px 334px;

  .delivery__info__wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .delivery__info__top {
      margin-bottom: 21px;
    }

    .delivery__info__name {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
    }

    .delivery__info__name::after {
      content: "기본";
      font-size: 15px;
      font-weight: bold;
      color: #1790ff;
      margin-left: 10px;
    }
  }

  .delivery__info__bottom > .info__phone__number,
  .info__address > span {
    color: #6c6c6c;
    font-size: 14px;
  }

  .info__address {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DeliveryAddress = () => {
  return (
    <Wrap>
      <InfoBgBox className="delivery__info__wrap" height="132px">
        <div className="delivery__info__top">
          <span className="delivery__info__name">박성용</span>
        </div>

        <div className="delivery__info__bottom">
          <p className="info__phone__number">010-4444-1111</p>
          <div className="info__address">
            <span>서울특별시 중구 장충단로6길 54, 101호</span>
            <input type="radio" />
          </div>
        </div>
      </InfoBgBox>
      <LoginBtn>+ 배송지 추가</LoginBtn>
    </Wrap>
  );
};
export default DeliveryAddress;
