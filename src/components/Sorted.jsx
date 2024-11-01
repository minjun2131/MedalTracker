import React from 'react'

// sorted는 한군대에서만 처리해주는게 좋음 제일 마지막에
// sort가 보여줄 때만 필요하다면 그 목적 달성하기 전에 한번만
// return 하기 전에 if문으로 나라이름 순 혹은 silver bronze에 따라 정렬이 가능하다.

const Sorted = ({children,sortMedal,setSortMedal}) => {
    // medal-title-style
    const titleWrapStyle = {
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor:"darkblue",
        display:"flex",
    }

    const titleBtnStyle = {
        fontSize:"14px",
        marginLeft:"5px",
        cursor:"pointer",
    }


    // 정렬하는 로직
    const sortedByMedal = (value) => {
        console.log(value);
        setSortMedal(value);
        localList.sort((a,b)=>b[value] - a[value]);
    }

  return (
    <div style={titleWrapStyle} children = {children}>
        <p>국가명</p>
        <p>금메달<i style={titleBtnStyle} onClick={()=>sortedByMedal('gold')}>{sortMedal === 'gold' ? '▼' : '▲'}</i></p>
        <p>은메달<i style={titleBtnStyle} onClick={()=>sortedByMedal('silver')}>{sortMedal === 'silver' ? '▼' : '▲'}</i></p>
        <p>동메달<i style={titleBtnStyle} onClick={()=>sortedByMedal('bronze')}>{sortMedal === 'bronze' ? '▼' : '▲'}</i></p>
        <p>총메달<i style={titleBtnStyle} onClick={()=>sortedByMedal('total')}>{sortMedal === 'total' ? '▼' : '▲'}</i></p>
        <p>액션</p>
    </div>
  )
}

export default Sorted