import { useState } from "react";

function useInput(){ // use 접두어 붙이면 커스텀훅

  const[input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return [input, onChange];

}

export default useInput