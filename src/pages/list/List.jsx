import styled from "styled-components";
import ListTab from "./ui/ListTab";
import ListFollow from "./ui/Follow";
import ListHot from "./ui/Hot";
import ListNew from "./ui/New";
import Collection from "./ui/Collection";
import ListCeleb from "./ui/ListCeleb";
import { useDispatch, useSelector } from "react-redux";
import { menuChange } from "../../store/store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../common/utils/scrollToTop";
import { shuffleArray } from "../../common/utils/shuffleArray";

const Wrapper = styled.div`
  padding: 0 16px;
`;

function List() {
  const dispatch = useDispatch();
  const location = useLocation();
  const type = useSelector((state) => state.listTabType.type);
  const storeProduct = useSelector((state) => state.product.product);
  const storeUserLike = useSelector((state) => state.userLike.like);
  const storeCollection = useSelector((state) => state.collection.collection);
  const storeCleb = useSelector((state) => state.celeb.celeb);
  const product = location.state?.product == undefined ? storeProduct : location.state?.product;
  const userLike = location.state?.userLike == undefined ? storeUserLike : location.state?.userLike;
  const productAll = location.state?.productAll == undefined ? storeProduct : location.state?.productAll;
  const coll = location.state?.coll == undefined ? storeCollection : location.state?.coll;;
  const randomProduct = location.state?.randomProduct == undefined ? shuffleArray(storeProduct) : location.state?.randomProduct;
  const user = location.state?.user == undefined ? storeCleb : location.state?.user;;
  const userFollowing = location.state?.userFollowing;

  ScrollToTop()
  useEffect(() => {
    dispatch(menuChange("product"));
  }, []);

  return (
    <Wrapper>
      <ListTab type={type}></ListTab>

      {
        type === "follow" ? <ListFollow product={product} userLike={userLike} />
          : type === "hot" ? <ListHot randomProduct={randomProduct} product={product} userLike={userLike} />
            : type === "new" ? <ListNew randomProduct={randomProduct} product={product} userLike={userLike}></ListNew>
              : type === "coll" ? <Collection coll={coll} productAll={productAll} />
                : type === "celeb" ? <ListCeleb user={user} userFollowing={userFollowing}></ListCeleb>
                  : ""
      }
    </Wrapper>
  );
}

export default List;
