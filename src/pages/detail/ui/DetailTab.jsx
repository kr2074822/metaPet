import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 24px;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            width: 88px;
            height: 44px;
            border: 1px solid #E9E9E9;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        li.on {
            color: #1790FF;
            background: #2EB4FF0D;
            border: 1px solid #1790FF;
        }
    }
`;

function DetailTab({setType, type}) {
    return (
        <Wrapper>
            <ul>
                <li onClick={()=>{setType('story')}} className={type === 'story' ? "on" : ''}>스토리</li>
                <li onClick={()=>{setType('info')}} className={type === 'info' ? "on" : ''}>정보</li>
                <li onClick={()=>{setType('community')}} className={type === 'community' ? "on" : ''}>커뮤니티</li>
                <li onClick={()=>{setType('follower')}} className={type === 'follower' ? "on" : ''}>구매자</li>
            </ul>
        </Wrapper>
    )
}

export default DetailTab;