import styled from "styled-components";
import { Link } from "react-router-dom";
import { objToArr } from "../../../common/utils/objToArr";



const CollItem = styled.li`
    width: 100%;
    padding: 12px;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 #0000000F;
    margin-bottom: 15px;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ImgLink = styled(Link)`
    margin-right: 14px;
    overflow: hidden;

    & > img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        object-fit: cover;
    }
`;

const UserLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;
    margin-bottom: 15px;

    & > span {
        display: block;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #333333;

        &:last-child {
            font-size: 14px;
            font-weight: 400;
            color: #909090;
        }

    }
`;

const CollImg = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SoloImg = styled.div`
    width: 48%;
    margin-right: 10px;

    & > img  {
        width: 152px;
        height: 200px;
        object-fit: cover;
        border-radius: 24px;
    }
`;


const GroupImg = styled.div`
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    
    & > img {
        width: 95px;
        height: 95px;
        object-fit: cover;
        border-radius: 12px;
    }
`;

function CollectionItem({ coll, productAll }) {
    let product = objToArr(coll.product);
    let collectionItem;

    function filterCollection() {
        let temp = [];

        productAll?.filter((val, i) => {
            product?.filter((item, idx) => {
                if (val.uuid == item) {
                    temp.push(val);
                }
            })
        });
        return temp
    }
    collectionItem = filterCollection();

    return (
        <CollItem>
            <UserInfo>
                <div>
                    <ImgLink to={"/"}>
                        <img src={coll.userImage} />
                    </ImgLink>

                    <UserLink to={"/"}>
                        <span>{coll.title}</span>
                        <span>created by {coll.userNickname}</span>
                    </UserLink>
                </div>
            </UserInfo>
            <CollImg to={"/"}>
                <SoloImg>
                    <img src={coll.image} />
                </SoloImg>
                <GroupImg>
                    {
                        collectionItem &&
                        collectionItem?.slice(0, 4).map((item, i) => {
                            return (
                                <img src={item.image} key={i} />
                            )
                        })
                    }
                </GroupImg>
            </CollImg>
        </CollItem>
    )
}

export default CollectionItem;