import { useState } from "react";
import useInput from "./useInput";

const HookExam = () => {

  const[input, onChange] = useInput();
  const[input2, onChange2] = useInput();

  
  return(

    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
      {input}
    </div>
  )

}

export default HookExam;