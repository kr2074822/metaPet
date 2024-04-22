import styled from "styled-components";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { headerChange } from "../../../store/store";
import { useEffect } from "react";
import { LoginLink } from "../../../components/styled/UI/link/Link";

const Wrapper = styled.div`
`;

const FollowList = styled.div`
    margin-bottom: 70px;
`;

const FollowNone = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #565656;

    & > h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 13px;
    }

    & > span {
        font-size: 14px;
        font-weight: 600;
    }
`;

const LoginAlert = styled(FollowNone)`
    & > h1 {
        margin-bottom: 30px;
   }
`;

function ListFollow({ product, userLike }) {
    const dispatch = useDispatch();
    const loginUser = useSelector((state) => state.loginUser.user);
    let myLikeItem;

    useEffect(() => {
        dispatch(headerChange({
            type: 't2',
            title: 'Follow',
        }));
    }, [])

    function filterProduct() {
        let temp = [];

        product?.filter((val, i) => {
            userLike?.filter((item, idx) => {
                if (val.uuid == item) {
                    temp.push(val);
                }
            })
        });
        return temp
    }
    myLikeItem = filterProduct();

    return (
        <Wrapper>
            <FollowList>
                <ul>
                    {
                        loginUser === undefined ?
                            <LoginAlert>
                                <h1>로그인 후 이용이 가능합니다.</h1>
                                <LoginLink to="/login">로그인</LoginLink>
                            </LoginAlert>
                            : loginUser !== undefined && myLikeItem.length === 0 ?
                                <FollowNone>
                                    <h1>아직 팔로우가 없네요!</h1>
                                    <span>관심있는 작가를 팔로우해볼까요?</span>
                                </FollowNone>
                                : myLikeItem.map((item, idx) => {
                                    return (
                                        <ListItem item={item} userLike={userLike} randomProduct={product} key={idx} />
                                    )
                                })
                    }
                </ul>
            </FollowList>
        </Wrapper>
    )
}

export default ListFollow;