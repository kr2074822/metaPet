import './global/reset.css';
import "./global/font.css";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MainRouter from './common/routers';
import { loginStateChange } from './store/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import styled from 'styled-components';

function App() {

  const dispatch = useDispatch();

  // session으로 로그인 상태 확인
  useEffect(() => {
    // const session = sessionStorage.key(0);
    dispatch(loginStateChange({ value: JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))?.email }));
  }, [])

  return (
    <div className="App">
      <Header type="t4" />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
