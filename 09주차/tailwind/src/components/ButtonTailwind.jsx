import React from 'react';
const ButtonTailwind = () =>{
    return (
        <>
            <div className='m-4 block'>
                <button className="bg-red-500 text-white px-4 py-2 w-50 rounded-3xl mr-2">빨간색</button>
                <button className="bg-green-500 text-black px-8 py-3 w-50 font-semibold mr-2">초록색</button>
                <button className="bg-black text-white px-16 py-5 w-50 rounded-2xl">검은색</button>
                <br/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">button</button>
            </div>

        </>
    )
}
export default ButtonTailwind;
