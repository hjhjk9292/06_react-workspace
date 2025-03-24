const Button = ({children, text, color = "black"}) => {


  const onClickButton = (e) => {
    console.log(e);
    // 합성 이벤트 객체 : 모든 브라우저에서 사용할 수 있는 통합 이벤트 객체다.
  }



  return (
    <button 
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{color:color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button;