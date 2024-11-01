import React from 'react'

const Render = ({medal,deleteHandler}) => {
    const {country,gold,silver,bronze,id,total} = medal;
    return (
    <div className="medal-result">
        <p>{country}</p><p>{gold}</p><p>{silver}</p><p>{bronze}</p><p>{total}</p>
        <p><button onClick={()=>deleteHandler(id)}>삭제</button></p>
    </div>
    )
}

export default Render