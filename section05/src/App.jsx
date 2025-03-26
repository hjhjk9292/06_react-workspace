import './App.css'
import { useState } from 'react'
import Bulb from './conponents/Bulb';
import Counter from './conponents/Counter';
import Register from './conponents/Register';
import HookExam from './conponents/Hook/HookExam';

// ㄴ 컴포넌트는 이름만 작성


// 리액트에서 화면이 리렌더링 되는 경우는 3가지가 있다.
// 1. 자신이 관리하는 state의 값이 변경됐을 때
// 2. 제공 받는 props의 값이 변경 될 때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 요소들 모두 리렌더링 된다.

// 변경해주기 ㄱ

function App() {

  return (
    <>
      <HookExam/>
    </>
  )
}

export default App