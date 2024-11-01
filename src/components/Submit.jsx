import React,{useState} from 'react'

const Submit = ({updateClick,localList,setLocalList}) => {
    function handleSubmit(event) {
        
        event.preventDefault();
        
        // 국가명 체크
        if (country==="") {
          alert("국가명이 비어있습니다.");
          return;
        }
    
        // 중복 국가 확인 로직
        const duplicate = localList.some(medal => medal.country === country);
        if (duplicate) {
          alert("이미 등록된 국가가 있습니다.");
          return;
        }

        // 저장되는 로직
        const medalTotal = Number(gold)+Number(silver)+Number(bronze);
        const newMedalsCountry = {
          id: new Date().getTime(),
          country : country,
          gold : Number(gold),
          silver : Number(silver),
          bronze : Number(bronze),
          total : medalTotal,
        };
    
        
        alert(`${country}을(를) 등록하였습니다.`);
    
        // localStorage 업데이트
        localStorage.setItem('medalCountry',JSON.stringify([...localList, newMedalsCountry]));
        setLocalList([...localList, newMedalsCountry]);

        // 초기값 설정
        setCountry("");
        setGold(0);
        setSilver(0);
        setBronze(0);
        
    }
    const [country, setCountry] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    // 왜 초기값은 넘어가지 않는지 물어보기
    return (
        <form onSubmit={handleSubmit} method="get">
            <p>
                <label htmlFor="country">국가명</label><input 
                id="country" type="text" placeholder="국가 입력"
                onChange={(e)=>{setCountry(e.target.value)}}
                name="country" value={country}/>
            </p>
            <p>
                <label htmlFor="gold">금메달</label><input 
                id="gold" type="number" min="0" max="99" value={gold}
                onChange={(e)=>{setGold(e.target.value)}}
                name="gold" />
            </p>
            <p>
                <label htmlFor="silver">은메달</label><input 
                id="silver" type="number" min="0" max="99" value={silver}
                onChange={(e)=>{setSilver(e.target.value)}}
                name="silver" />
            </p>
            <p>
                <label htmlFor="bronze">동메달</label><input 
                id="bronze" type="number" min="0" max="99" value={bronze}
                onChange={(e)=>{setBronze(e.target.value)}}
                name="bronze" />
            </p>
            <p className="button-wrap">
                <button type="submit">국가 추가</button>
                <button type="button" onClick={updateClick}>업데이트</button>
            </p>
        </form>
    )
    
}

export default Submit