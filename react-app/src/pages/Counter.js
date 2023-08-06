import React from "react";
import {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    //number를 0으로 설정 setnumber는 값을 바꾸게 해줌
    const increase =() => {
        setNumber(number+1);
    }
    const decrease = () =>{
        setNumber(number-1);
    }
    const reset = ()=>{
        setNumber(0);
    }
    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={reset}>reset</button>
            <p>{number}</p>
        </div>
    )
}
export default Counter;