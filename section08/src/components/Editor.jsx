import { useState, useRef } from "react";
import "./Editor.css"

const Editor = ({onCreate}) => { // onCreate에는 함수가 들어있음

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) =>{
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if(content === ""){ // 아무것도 입력 안 했을 때
      contentRef.current.focus()
      return;
    }
    onCreate(content);
    setContent(""); // 검색버튼 클릭 후 검색창의 검색어 비우기
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){ // 엔터 버튼 keyCode는 13번임 // onKeyDown이 이벤트 이름임
      onSubmit();
    }
  }

  return (
    <div className="Editor">
      <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onChangeContent} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;