import styled from "styled-components";
import sampleImg from '../../../assets/images/common/dog_sample2.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ref, remove, update } from "firebase/database";
import { db } from "../../../common/api/firebase";
import { saveFollowing } from "../../../store/store";

const Wrapper = styled.li`
    width: 48%;
    height: 268px;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 #0000000F;
    overflow: hidden;
    margin-bottom: 12px;

    & > img {
        width: 100%;
        height: 95px;
        object-fit: cover;
        margin-bottom: 60px;
    }
`;


const UserLink = styled(Link)`
    margin-bottom: 60px;
    position: absolute;
    width: 54px;
    height: 54px;
    object-fit: cover;
    top: 68px;
    left: 50%;
    transform: translateX(-50%);
    
    & > img {
        width: 54px;
        height: 54px;
        object-fit: cover;
        border-radius: 100%;
    }
`;

const UserFollow = styled.div`
    width: 100%;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > span {
        display: block;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        color: #333333;
        margin-bottom: 13px;
    }

    & > button {
        width: 145px;
        height: 45px;
        border-radius: 28px;
        border: none;
        font-size: 16px;
        font-weight: 700;
        color: #FFFFFF;
        background: #33C2FF;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

function CelebItem({ item, userFollowing }) {
    const loginUser = useSelector((state) => state.loginUser.user);
    const navigation = useNavigate()
    const [followList, setFollowList] = useState(userFollowing);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveFollowing(followList));
    }, [followList])

    function addFollow() {
        if (loginUser === undefined) {
            alert("로그인 후 이용해주세요");
            navigation("/login")
        } else {
            // 팔로우
            const myAddFollow = () => {
                const temp = { [item.uuid]: item.uuid };
                return update(ref(db, "/user/" + loginUser.uuid + "/following"), temp)
            };

            const otherAddFollow = () => {
                const temp = { [loginUser.uuid]: loginUser.uuid };
                return update(ref(db, "/user/" + item.uuid + "/follower"), temp)
            };
            myAddFollow()
            otherAddFollow();
            if (followList) {
                setFollowList((prev) => [...prev, item.uuid]);
            }
        }
    }

    function removeFollow() {
        // 팔로우취소
        remove(ref(db, "/user/" + loginUser.uuid + "/following/" + item.uuid));
        remove(ref(db, "/user/" + item.uuid + "/follower/" + loginUser.uuid));
        function removeFollowArr() {
            let temp = [];
            for (let i = 0; i < followList.length; i++) {
                if (followList[i] !== item.uuid) {
                    temp.push(followList[i]);
                }
            }
            return temp;
        }
        setFollowList(removeFollowArr());
    }

    return (
        <Wrapper>
            <img src={sampleImg} />
            <UserLink to={"/celeb/" + item.uuid} state={{ item: item }}>
                <img src={item.image} />
            </UserLink>
            <UserFollow>
                <span>{item.nickName}</span>
                {
                    (followList?.filter((e) => e == item?.uuid).length > 0) ?
                        <button onClick={() => { removeFollow(item?.uuid) }}>UnFollow</button>
                        : (item.uuid !== loginUser?.uuid) ?
                            <button onClick={() => { addFollow() }}>Follow</button>
                            : null
                }
            </UserFollow>
        </Wrapper>
    )
}

export default CelebItem;