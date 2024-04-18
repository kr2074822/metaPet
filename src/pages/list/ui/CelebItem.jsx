import styled from "styled-components";
import sampleImg from '../../../assets/images/common/dog_sample2.png';
import sampleImg2 from '../../../assets/images/common/dog_sample3.png';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


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

    return (
        <Wrapper>
            <img src={sampleImg} />
            <UserLink to={"/celeb/" + item.uuid} state={{ item: item }}>
                <img src={item.image} />
            </UserLink>
            <UserFollow>
                <span>{item.nickName}</span>
                {
                    (userFollowing?.filter((e) => e == item?.uuid).length > 0) ?
                        <button>UnFollow</button>
                        : (item.uuid !== loginUser?.uuid) ?
                            <button>Follow</button>
                            : null
                }
            </UserFollow>
        </Wrapper>
    )
}

export default CelebItem;