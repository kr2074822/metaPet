import styled from "styled-components";
import ListItem from "./ListItem";
import Title from "../../../components/title/Title";
import { headerChange } from "../../../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Wrapper = styled.div`
`;

const HotList = styled.div`
    margin-bottom: 70px;
`;

function ListHot({ product, userLike, randomProduct }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerChange({
            type: 't2',
            title: 'Hot',
        }));
    }, []);

    return (
        <Wrapper>
            <Title title="인기있는 판매 NFT를 만나보세요" sub="최근 24시 동안 가장 많이 판매된 NFT 입니다"></Title>
            <HotList>
                <ul>
                    {
                        product &&
                        product.map((item, idx) => {
                            return (
                                <ListItem item={item} userLike={userLike} randomProduct={randomProduct} key={idx} />
                            )
                        })
                    }
                </ul>
            </HotList>
        </Wrapper>
    )
}

export default ListHot;