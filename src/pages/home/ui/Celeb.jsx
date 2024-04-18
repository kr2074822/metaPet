import styled from "styled-components";
import CelebList from "./CelebList";
import { followerArrFn, objToArr } from "../../../common/utils/objToArr";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    padding: 14px 12px;
    background: #FFF;
    border-radius: 14px;
    box-shadow: 0 4px 10px 0 #0000000F;
`;

function Celeb({ user }) {
    let userArr = followerArrFn(user);
    const [celeb, setCeleb] = useState();

    console.log();
    // follower 정렬
    useEffect(() => {
        if (userArr != null) {
            let result = userArr.sort((a, b) => a.follower.length > b.follower.length ? -1 : 1);
            // setNewProduct(result);
            setCeleb(result)
        }
    }, [user])



    return (
        <Wrapper>
            <ul>
                {
                    celeb &&
                    celeb.map((item, idx) => {
                        return (
                            <CelebList celeb={item} key={idx} />
                        )
                    })
                }
            </ul>
        </Wrapper>
    )
}

export default Celeb;