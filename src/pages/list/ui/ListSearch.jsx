import styled from "styled-components";
import searchIcon from "../../../assets/images/common/search_icon.png";

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 30px;

    & > button {
        width: 56px;
        height: 100%;
        border: none;
        background: #F9F9F9;
        padding: 0;
        flex-shrink: 0;

        & > img {
            width: 24px;
            height: 24px;
        }
    }

    & > input {
        width: 100%;
        height: 100%;
        padding: 8px;
        border: none;
        outline: none;
        background: #F9F9F9;
        font-size: 14px;
        font-weight: 400;
        color: #909090;
    }

`;

function ListSearch({ item, setSearchItem }) {
    function searchFn(value) {
        let temp = [];
        temp = item.filter((e) => (e?.title ?? e?.nickName)?.includes(value.target.value));
        return temp;
    }

    return (
        <Wrapper>
            <button><img src={searchIcon} /></button>
            <input type="text" placeholder="검색해보세요" onChange={(e)=> {setSearchItem(searchFn(e))}} />
        </Wrapper>
    )
}

export default ListSearch;