// async
// 함수 앞에 붙이는 키워드
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData(){

  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve({
        name : "차은우",
        id : "user01"
      })
    },1500)
  })
}

// console.log(getData())

// await
// async 함수 내부에서만 사용이 가능한 키워드

async function printData(){
  const data = await getData();
  console.log(data)
}

printData();

// 비동기 할 때는 async await 사용하면 된다 => 자바스크립트는 성격이 급해서,,, 프로젝트 시 실행 순서가 다르다면 이거 사용!!