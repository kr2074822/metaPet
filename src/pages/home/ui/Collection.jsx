import styled from "styled-components";
import CollectionList from "./CollectionList";

const Wrapper = styled.div`
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`;

function Collection({ product,  userLike, productAll, randomProduct}) {
    let temp = product?.slice(0, 5);


    return (
        <Wrapper>
            <ul>
                {
                    temp !== undefined ?
                        temp.map((item, idx) => {
                            return (
                                <CollectionList product={item} key={idx} userLike={userLike} productAll={productAll} randomProduct={randomProduct} />
                            )
                        })
                        : null
                }
            </ul>

        </Wrapper>
    )
}

export default Collection;