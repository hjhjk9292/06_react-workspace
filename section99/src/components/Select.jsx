import { useState } from "react";

const Select = ({ color, updateColor }) => {
    const [select, setSelect] = useState(color);
    const selectColor = (e) => {
      setSelect(e.target.value);
    };
    const onUpdateColor = () => {
      updateColor(select);
    };
    return (
      <>
        <h1>컬러 팔레트</h1>
        <select name="color" onChange={selectColor}>
          <option value="빨강">빨강</option>
          <option value="주황">주황</option>
          <option value="노랑">노랑</option>
        </select>
        <button onClick={onUpdateColor}>선택하기</button>
      </>
    );
   };

   export default Select
   