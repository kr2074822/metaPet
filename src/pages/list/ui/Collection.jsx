import styled from "styled-components";
import Title from "../../../components/title/Title";
import ListSearch from "./ListSearch";
import CollectionItem from "./CollectionList";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { headerChange } from "../../../store/store";

const Wrapper = styled.div`
    margin-bottom: 70px;
`;

const CollectionList = styled.div`
    width: 100%;
    
    & > ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
`;

function Collection({ coll, productAll }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerChange({
            type: 't2',
            title: 'Collection',
        }));
    }, []);

    const [searchItem, setSearchItem] = useState(coll);

    useEffect(() => {
        setSearchItem((prev) => ([...prev]))
    }, [coll])

    return (
        <Wrapper>
            <Title title="다양한 NFT컬렉션을 만나보세요" sub="컬렉션 수집은 NFT가 주는 즐거움이 배가 됩니다"></Title>
            <ListSearch item={coll} setSearchItem={setSearchItem} />
            <CollectionList>
                <ul>

                    {
                        searchItem &&
                        searchItem.map((item, i) => {
                            return (
                                <CollectionItem coll={item} productAll={productAll} key={i} />

                            )
                        })
                    }
                </ul>
            </CollectionList>
        </Wrapper>
    )
}

export default Collection;