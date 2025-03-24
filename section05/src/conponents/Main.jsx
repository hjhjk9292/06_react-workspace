import "./Main.css"

// JSX
// 1. 중괄호 내부에는 자바스크립트 표현식(값)만 넣을 수 있다.
// => if문이나 for문은 안 됨! 값으로써 평가되는 것만 넣을 수 있음
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.(true, undefined, null 이런거 안 됨)
// 3. 모든 태그는 닫혀 있어야 한다. <img/> 이런식으로 써야함! => 셀프 클로징 ㅡ 또는 원래 <input>이렇게만 작성했는데 여기서는 <input></input>로 작성해야함
// 4. 최상위 태그는 하나여야 한다! 병렬로 배치하면 안된다.
// 왜요? 원래 그래~ 빈태그도 가능!
// 5. class 부여 시 className 이라는 속성 활용!

const Main = () => {

  const user = {
    name : "은우",
    isLogin : false,
  }


      {/* {user.isLogin ? "로그아웃" : "로그인"} */}
      if(user.isLogin){
        return <div style={{
          backgroundColor : "red",
          borderBottom : "5px solid blue"
        }}>로그아웃</div>

      }else{
        return <div className="login">로그인</div>

      }
  }

export default Main;