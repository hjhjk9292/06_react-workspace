import { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css"


const List = ({todos, onUpdate, onDelete}) => {



  const [search, setSearch] = useState(""); /*1. 맨 위 import 후 state 만든다 */ 

  const onChangeSearch = (e) => { /* 2. 함수 만든다 */
    setSearch(e.target.value);
  }

  const getFilteredDate = () => {
    if(search === ""){ //아직 검색을 안했다. // todos => 배열 [{},{}] 
      return todos; // if문에서 return 만나면 빠져나감,, else 작성해도 되지만 쌤은 아래에 작성!! 
    }
    return todos.filter((todo)=>{ // 배열.filter(()=>{}) 새로운 배열로 줌!!
      return todo.content.toLowerCase().includes(search.toLowerCase()) // 내가 가져온 이 요소의 글자가 search를 포함하는지...
    })

  }

  const filteredTodos = getFilteredDate() // search가 있을 때는 filteredTodos 하지만 없으면 안 함?!

  return (
    <div className="List">
      
      <h4>Todo List🌱</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{ // 리액트는 for문 안 돌림 => map 사용 // map 사용 시 구분할 수 있는 식별자 같은 key 값을 줘야함(반복적으로 그려내는 요소에 key를 원함) // ** filteredTodos를 map을 돌려야함 **

          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />

        })}


      </div>

    </div>
  )
}

export default List;