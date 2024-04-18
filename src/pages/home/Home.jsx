import styled from "styled-components";
import Title from "../../components/title/Title";
import More from "../../components/more/More";
import Collection from "./ui/Collection";
import FavSwipe from "./ui/Favswipe";
import NewSwipe from "./ui/Newswipe";
import ScrollToTop from "../../common/utils/scrollToTop";
import { ref, child, get, update } from "firebase/database";
import { db, firebaseConfig } from "../../common/api/firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headerChange, likeToggle, loginStateChange, loginUserSet, menuChange, saveProduct } from "../../store/store";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import firebase from "firebase/compat/app";
import { objToArr } from "../../common/utils/objToArr";
import Celeb from "./ui/Celeb";
import { uid } from "uid";
import { shuffleArray } from "../../common/utils/shuffleArray";


const Wrapper = styled.div`
  padding: 20px 16px;
  background: #f9fcff;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

function Home() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [hotProduct, setHotProduct] = useState(null);
  const [user, setUser] = useState([]);
  const loginState = useSelector((state) => state.loginState);
  const [userLike, setUserLike] = useState();
  const [coll, setColl] = useState();
  const [randomProduct, setRandomProduct] = useState();
  const [userFollower, setUserFollwer] = useState();
  const [userFollowing, setUserFollwing] = useState();

  // --------------------------------------------------------------------------------------

  // 헤더설정
  useEffect(() => {
    dispatch(headerChange({
      type: 't1',
      title: 'home',
    }))
    dispatch(menuChange('home'));
  }, [])



  useEffect(() => {
    // 제품 데이터
    async function getProduct() {
      const dbRef = ref(db);
      await get(child(dbRef, "/product"))
        .then(snapshot => {
          if (snapshot.exists()) {
            let temp = objToArr(snapshot.val())
            setProduct(temp);
            setRandomProduct(shuffleArray(temp));
          } else {
            console.log("No data available");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    getProduct();

    // 유저 데이터
    async function getUser() {
      const dbRef = ref(db);
      await get(child(dbRef, "/user"))
        .then(snapshot => {
          if (snapshot.exists()) {
            // 배열로 반환
            let temp = objToArr(snapshot.val())
            // let tempFollow =
            // let tempFollowing =
            setUser(temp);

          } else {
            console.log("No data available");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    getUser();


    // 컬렉션 데이터
    async function getCollection() {
      const dbRef = ref(db);
      await get(child(dbRef, "/collection"))
        .then(snapshot => {
          if (snapshot.exists()) {
            // 배열로 반환
            let temp = objToArr(snapshot.val())
            setColl(temp);
          } else {
            console.log("No data available");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    getCollection();
  }, []);



  // New 정렬 & hot 정렬
  useEffect(() => {
    if (product != null) {
      let resultNew = product.sort((a, b) => a.startDate.toLowerCase() > b.startDate.toLowerCase() ? -1 : 1);
      let resultHot = product.sort((a, b) => objToArr(a.like).length > objToArr(b.like).length ? -1 : 1);
      setNewProduct(resultNew);
      setHotProduct(resultHot);
      dispatch(saveProduct(product));
    }
  }, [product])












  // 로그인 유저 찾기
  useEffect(() => {
    let result = user.filter(e => e.email === loginState.value);
    let likeTemp = objToArr(result[0]?.like);
    setUserLike(likeTemp);

    let productTemp = objToArr(result[0]?.product);
    let followerTemp = objToArr(result[0]?.follower);
    let followingTemp = objToArr(result[0]?.following);
    dispatch(loginUserSet(result[0]));
    dispatch(likeToggle(likeTemp));

    setUserFollwer(followerTemp);
    setUserFollwing(followingTemp)
    // objToArr(result[0].like)

    // console.log(likeTemp);
  }, [user])



  // product.sort();

  // let result = product.sort((a, b) => a.startDate.toLowerCase() < b.startDate.toLowerCase() ? -1 : 1);
  // console.log(result);


  // console.log(product);

  // const updateData = () => {
  //   const temp = {
  //     amount: 10000
  //   };

  //   return update(
  //     ref(db, "/product/0"), temp);
  // };

  // updateData();


  // -**************-


  // const Signup = () => {
  //   async function register(email, password) {
  //     try {
  //       const auth = getAuth();
  //       console.log(auth);
  //       const user = await createUserWithEmailAndPassword(auth, 'rladudwn0215@naver.com', 'dudwnekt93');
  //       console.log(user);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   register();
  // }


  // Signup();








  return (
    <Wrapper>
      <ScrollToTop />

      <Title
        title="반려동물 NFT를 메타펫에서 만날 수 있습니다."
        sub="국내 최초 반려동물 전용 NFT 마켓플레이스, 메타펫"
      />

      <Section>
        <More title="인기있는 NFT" type="hot" product={hotProduct} userLike={userLike} randomProduct={randomProduct} />
        <FavSwipe product={hotProduct} userLike={userLike} randomProduct={randomProduct} />
      </Section>

      <Section>
        <More title="New NFT" type="new" product={newProduct} userLike={userLike} randomProduct={randomProduct} />
        <NewSwipe product={newProduct} randomProduct={randomProduct} />
      </Section>

      <Section>
        <More title="Top Collections" type="coll" />
        <Collection product={coll} userLike={userLike} productAll={product} randomProduct={randomProduct} />
      </Section>

      <Section>
        <More title="Top Celeb" type="celeb" user={user} userFollowing={userFollowing} />
        <Celeb user={user} />
      </Section>
    </Wrapper>
  );
}

export default Home;
