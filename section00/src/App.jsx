import { useState, useRef } from 'react';
import './App.css';
import Register from './components/Register';
import List from './components/List';
import Friend from './components/Friend';

function App() {
  const mockData = [
    {
      id: 0,
      name: "차은우",
      location: "서울",
      date: "1999-01-01"
    },
    {
      id: 1,
      name: "주지훈",
      location: "인천",
      date: "1999-01-02"
    },
    {
      id: 2,
      name: "장원영",
      location: "부산",
      date: "1999-01-03"
    },
  ];

  const [buddies, setBuddies] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (name, location, date) => {
    const newBuddy = {
      id: idRef.current++,
      name: name,
      location: location,
      date: date
    };
    setBuddies([...buddies, newBuddy]); // 새 친구 항목을 뒤에 추가 // [newBuddy, ...buddies]: 앞에 추가
  };

  const onUpdate = (targetId) => {
    setBuddies(buddies.map((buddy) => {
      if (buddy.id === targetId) {
        return {
          ...buddy,
          isDone: !buddy.isDone
        };
      }
      return buddy;
    }));
  };

  const onDelete = (targetId) => {
    setBuddies(buddies.filter((buddy) => buddy.id !== targetId));
  };

  return (
    <>
      <Register />
      <List onCreate={onCreate} />
      <Friend buddies={buddies} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  );
}

export default App;