import React,{useState} from 'react'
import Submit from './components/Submit';
import Render from './components/Render';
import Sorted from './components/Sorted';

const App = () => {

  // const [state, setState] =useState();
  // setState를 넘긴다고 state도 넘어오지 않는다
  // state setState 모두 props로 넘겨줄 수 있다.
  // ?? 의 경우 왼쪽이 null이나 undefined면 왼쪽을 실행하게 하는 null병합연산자
  const [localList, setLocalList] = useState(JSON.parse(localStorage.getItem('medalCountry'))??[]);
  const [sortMedal, setSortMedal] = useState("gold");

  // 수정하는 로직
  function updateClick () {
    const goldValue = Number(gold.value);
    const silverValue = Number(silver.value);
    const bronzeValue = Number(bronze.value);

    // 국가명 확인
    if (country === "") {
      alert("국가를 입력해주세요");
      return;
    }
    // 메달 갯수 0 ~ 99개까지 체크
    if (goldValue > 100 || silverValue > 100 || bronzeValue > 100) {
      alert('99개를 초과한 메달이 존재합니다.');
      setValue(0);
      return;
    }

    const duplicateCheck = localList.some(medal => medal.country === country.value);
    if (!duplicateCheck) {
      alert("국가가 등록되어있지 않습니다.");
    }

    const medalTotal = goldValue + silverValue + bronzeValue;
    const newState = localList.map(function(medal){
      console.log(gold.value);
      if (medal.country === country.value) {
        alert("업데이트 되었습니다.");
        return {...medal, gold : goldValue ,silver : silverValue , bronze : bronzeValue , total : medalTotal}
      } 
      return medal;
    });
    console.log(newState);
    localStorage.setItem('medalCountry',JSON.stringify(newState));
    
    setLocalList(newState);

  }

  // 기존값 삭제하는 로직
  const deleteHandler = (id) => {

    if(window.confirm("정말 삭제하시겠습니까?")) {
      const deleteCountry = localList.filter(function(delCountry){
        return delCountry.id !== id;
      });
      alert("삭제가 완료되었습니다.");
      window.localStorage.setItem('medalCountry',JSON.stringify(deleteCountry));
      setLocalList(deleteCountry);
      
    }
  }

  return (
    <div id="wrap">
        <header><h1>2024 파리 올림픽</h1></header>
        <main>
          <section className="medal-submit">
            <Submit updateClick={updateClick} localList={localList} setLocalList={setLocalList}/>
          </section>
          <section className="medal-render">
              {localList.length === 0 ? <span>아직 추가된 국가가 없습니다!</span> : 
              <>
                <Sorted sortMedal={sortMedal} setSortMedal={setSortMedal}></Sorted>
                <div className='medal-wrap'> 
                {localList.map((medal)=>{ 
                  return(
                  <Render key={medal.id} medal={medal} deleteHandler={deleteHandler}/>
                   )
                })}
                </div>
              </>
              }
          </section>
        </main>
        <footer><a href="https://github.com/minjun2131">© https://github.com/minjun2131</a></footer>
    </div>
  )
}

export default App