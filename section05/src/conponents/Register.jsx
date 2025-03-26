import { useRef, useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개



// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 컴포넌트 내부에서만 호출 가능
// 2. 조건부로 호출 될 수 없다. (ex. if문 내부)
// 3. 나만의 훅(customHook)을 만들 수 있음

const Register = () => {

  const countRef = useRef(0); // 초기값 0
  const inputRef = useRef();
  console.log(countRef);

  // let count = 0; // 하나 있을 땐 상관 없으나 여러개 있을 때,,, 차이가 있음 변수로 만들지 말고 Ref로 관리

  const[input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : ""
  });

  // 이벤트 핸들러
  const onChange = (e) => {
    setInput({
      ...input, // 스프레드 문법이 필수!!
      [e.target.name] : e.target.value
    });
  }

  const onSubmit = () => {
    if(input.name === ""){
      //이름을 입력하는 dom 요소 포커스
      // console.log(inputRef.current)
      inputRef.current.focus();
    }
  }





// 리렌더링 쓰고 싶으면 state / refObj : 값은 바뀌지 않고 화면이 리렌더링 되지 않는다 (변수처럼 사용하고 싶을 때)
  console.log(input)

  return(
    <div>
      
      <button onClick={()=>{
        // count++;
        // console.log(count);

        // countRef.current++;
        // console.log(countRef.current);
      }}>ref + 1</button>

      <h1>안녕, 어서오세요</h1>

      <div>
        <input ref={inputRef} name="name" value={input.name} placeholder="이름" onChange={onChange} />
      </div>

      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="x"></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="eu">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>

    </div>
  )
}

export default Register;

// 리액트에서 사용자의 입력을 받는 방법 (완전 basic한 내용! 거의 공식)
// 1. 값을 저장하기 위해 state를 만든다. (안 만들면 내부적인 값은 바뀔지 몰라도 리렌더가 안된다)
// 2. 해당 요소가 변경될 때 마다 (onChange) state를 변경해주는 이벤트 핸들러 만든다.
// 3. 해당 요소의 onChange 속성에 해당 이벤트 핸들러 연결해준다.
// 4. value도 잘 써준다!
