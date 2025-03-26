import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'


const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : "세미 프로젝트 하기",
    date : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : "친구랑 놀기",
    date : new Date().getTime()
  },
];



function App() {

  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  const onCreate = (content) => {

    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    }

    // 배열에 요소를 추가하겠다 => push ㅡ Q. 요소 추가하는데 안된다? 
    // todos.push(newTodo); // 이건 절대 안 됨! push 안됨 ㅡ state를 바꾸려면 setTodos 호출해야함

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    // todos state 값 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // setTodos(인수)
    // 인수 : targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열

    setTodos(todos.map((todo)=>{
      if(todo.id === targetId){ // 만약에 todo.id가 targetId와 같아?
        return{
          ...todo, 
          isDone : !todo.isDone
        }
      }
      return todo;
    }))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=>{
        return todo.id !== targetId   
    }))
  }

  return (
    <div className='App'>
    <Header/>
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
