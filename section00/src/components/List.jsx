import { useState, useRef } from "react";
// 친구 추가 기능

const List = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("서울");
  const [date, setDate] = useState("");
  const contentRef = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = () => {
    if (name === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(name, location, date);
    setName("");
    setDate("");
  };

  return (
    <div>
      이름: <input ref={contentRef} value={name} onChange={onChangeName} /> <br />
      사는곳:
      <select value={location} onChange={onChangeLocation}>
        <option value="서울">서울</option>
        <option value="인천">인천</option>
        <option value="경기">경기</option>
        <option value="부산">부산</option>
      </select> <br />
      생일: <input type="date" value={date} onChange={onChangeDate} /> <br />
      <button onClick={onSubmit}>친구 추가</button>
    </div>
  );
};

export default List;