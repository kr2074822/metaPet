import styled from "styled-components";
import { Link } from "react-router-dom";

// footer link icon
import telegram from "../../assets/images/footer/telegram_icon.png";
import discord from "../../assets/images/footer/discord_icon.png";
import instagram from "../../assets/images/footer/instagram_icon.png";
import twitter from "../../assets/images/footer/twitter_icon.png";
import kakao from "../../assets/images/footer/kakao_icon.png";

// footer menu icon
import home from "../../assets/images/common/home_icon.png";
import productIcon from "../../assets/images/common/product_icon.png";
import cart from "../../assets/images/common/cart_icon.png";
import user from "../../assets/images/common/user_icon.png";

import homeOn from "../../assets/images/common/home_on_icon.png";
import productOnIcon from "../../assets/images/common/product_on_icon.png";
import cartOn from "../../assets/images/common/cart_on_icon.png";
import userOn from "../../assets/images/common/user_on_icon.png";

import { useSelector } from 'react-redux';
import { shuffleArray } from "../../common/utils/shuffleArray";

const Wrapper = styled.div`
  padding: 22px 16px 60px;
  background-color: #f5f5f5;
`;

const FooterInfo = styled.div`
  margin-bottom: 32px;
`;

const FooterLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 29px;
`;

const FooterIcon = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 6px;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const FooterTerms = styled.div`
  margin-bottom: 12px;

  & > span {
    display: block;
    margin-bottom: 13px;
    font-size: 13px;
    font-weight: 500;
  }
`;

const TermsList = styled.ul`
  li {
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 8px;
    display: flex;
    justify-content: left;
    align-items: flex-start;

    &:last-child {
      width: 115px;
      flex-shrink: 0;
      margin-bottom: 0;
    }

    span {
      &:first-child {
        flex-shrink: 0;
        padding-right: 5px;
        font-weight: 400;
        color: #66666680;
      }

      &:last-child {
        color: #666666;
      }
    }
  }
`;

const FooterCopyright = styled.div`
  margin-bottom: 29px;

  & span {
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    color: #909090;
  }
`;

const FooterMenu = styled(FooterIcon)`
  width: 100%;
  height: 60px;
  background: #ffffff;
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 0;

  ul {
    height: 60px;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 30px;

      img {
        width: 26px;
        height: 26px;
      }
    }
  }
`;

const LinkItem = styled(Link)`
  width: 122px;
  height: 46px;
  border: 1px solid #0000001a;
  border-radius: 11px;
  display: flex;
  margin: 0 4px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`;

const LinkMenu = styled(Link)``;

function Footer() {
  const menu = useSelector((state) => state.menuType.value);
  const loginState = useSelector((state) => state.loginState);
  const userLike = useSelector((state) => state.userLike.like);
  const product = useSelector((state) => state.product.product);

  return (
    <Wrapper>
      <FooterInfo>
        <FooterLink>
          <LinkItem to="/">고객센터</LinkItem>
          <LinkItem to="/">이용약관</LinkItem>
          <LinkItem to="/">개인정보처리</LinkItem>
        </FooterLink>
        <FooterTerms>
          <span>메타펫</span>
          <TermsList>
            <li>
              <span>대표</span>
              <span>박성용</span>
            </li>
            <li>
              <span>사업자등록번호</span>
              <span>839-42-01066</span>
            </li>
            <li>
              <span>통신판매업소신고번호</span>
              <span>서울시 00호</span>
            </li>
            <li>
              <span>회사주소</span>
              <span>
                경기도 안양시 동안구 시민대로 327번길 11-41(관양동 1744),
                안앙창업지원센터 3층 3186호 연구개발전담부서 서울시 종로구
                지봉로 81, 카페24창업센터 창신점 A08호
              </span>
            </li>
            <li>
              <span>Email</span>
              <span>service@metapetstudio.com</span>
            </li>
          </TermsList>
        </FooterTerms>
        <FooterCopyright>
          <span>Copyright © Metapet All Rights Reserved</span>
        </FooterCopyright>

        <FooterIcon>
          <ul>
            <li>
              <a href="#none">
                <img src={telegram} />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src={discord} />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src={instagram} />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src={twitter} />
              </a>
            </li>
            <li>
              <a href="#none">
                <img src={kakao} />
              </a>
            </li>
          </ul>
        </FooterIcon>
      </FooterInfo>

      <FooterMenu>
        <ul>
          <li>
            <LinkMenu to="/">
              <img src={menu == 'home' ? homeOn : home} />
            </LinkMenu>
          </li>
          <li>
            <LinkMenu to="/list" state={{ product: product, userLike: userLike, randomProduct: shuffleArray(product) }}>
              <img src={menu == 'product' ? productOnIcon : productIcon} />
            </LinkMenu>
          </li>
          <li>
            <LinkMenu to="/">
              <img src={menu == 'cart' ? cartOn : cart} />
            </LinkMenu>
          </li>
          <li>
            <LinkMenu to={loginState.value ? "/myPage" : "/login"}>
              <img src={menu == 'user' ? userOn : user} />
            </LinkMenu>
          </li>
        </ul>
      </FooterMenu>
    </Wrapper >
  );
}

export default Footer;
