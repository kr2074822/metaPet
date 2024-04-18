import styled from "styled-components";
import ListItem from "./ListItem";
import Title from "../../../components/title/Title";
import ListSearch from "./ListSearch";
import { useEffect } from "react";
import { headerChange } from "../../../store/store";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`

`;

const NewList = styled.div`
    margin-bottom: 70px;

    & > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        & > li {
            width: 48%;
            height: initial;
            
            &:last-child {
                margin-bottom: 24px;
            }

            & .shareBtn {
                width: 23px;
                height: 23px;
                top: 10px;
                right: 10px;
                
                & > img {
                    width: 23px;
                    height: 23px;
                }
            }

            & .likeBtn {
                display: none;
            }

            &  img {
                height: 160px;
            }
        }
    }
`;



function ListNew({ product, userLike, randomProduct }) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerChange({
            type: 't2',
            title: 'New',
        }));
    }, []);

    return (
        <Wrapper>

            <Title title="새로운 판매 NFT를 만나보세요" sub="마켓플레이스에서 늘 새로운 NFT 업데이트 됩니다."></Title>


            <ListSearch />

            <NewList>
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
            </NewList>
        </Wrapper>
    )
}

export default ListNew;