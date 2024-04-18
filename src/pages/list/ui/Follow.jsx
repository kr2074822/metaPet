import styled from "styled-components";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { headerChange } from "../../../store/store";
import { useEffect } from "react";

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


function ListFollow() {
    // init('t2', 'product', 'Follow');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerChange({
            type: 't2',
            title: 'Follow',
        }));
    }, [])
    

    return (
        <Wrapper>

            {/* <FollowNone>
                <h1>아직 팔로우가 없네요!</h1>
                <span>관심있는 작가를 팔로우해볼까요?</span>
            </FollowNone>

            <LoginAlert>
                <h1>로그인 후 이용이 가능합니다.</h1>
                <LoginLink>로그인</LoginLink>
            </LoginAlert> */}

            <FollowList>
                <ul>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </ul>
            </FollowList>
        </Wrapper>
    )
}

export default ListFollow;