import { useState, useEffect, useRef } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false); // 리액트 변수 만들 때 사용(useRef)

  // 1. 마운트 : 탄생 
  useEffect(()=>{ // 처음에 그려지고 나서 코드가 실행 / 배열 빈값으로 둠
    console.log("mount"); 
  }, []) 


  // 2. 업데이트 : 변화, 리렌더링(스테이트 값 변경)
    useEffect(()=>{ // 처음이랑 값이 변했을 때 뜬다
      if(!isMount.current){
        isMount.current = true;
        return;
      }
      console.log("update");
    })

  // 리액트의 컴포넌트가 마운트 : 데이터를 조회해라 라는 코드
  // 리액트가 렌더링 되면 : 수정된 데이터가 유효한지 검사하는 코드
  // 리액트가 언마운트 되면 : 메모리를 싹 비우는 최적화 코드


  // useEffect(콜백함수,배열)
  useEffect(()=>{
    // console.log(`count : ${count}`);
  },[count, input])

  // 의존성 배열
  // dependency array
  // deps


  const onClickButton = (value) => {
    setCount(count + value); // 비동기 함수 => 나중에 완료됨! 이 작업 오래걸림!
    // console.log(count); ㄴ> useEffect를 사용하는 것이 더 나음! 
  }


  return (
    <div className='App'>
    <h1>Simple Counter</h1>

    <section>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value);
      }}/>
    </section>

    <section>
      <Viewer count={count} />
      {count % 2 === 0 ? <Even/> : null}
    </section>

    <section>
      <Controller onClickButton={onClickButton}/>
    </section>

    </div>
  )
}

export default App
