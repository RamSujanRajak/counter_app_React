import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    function decreaseHandler() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('Count cannot go below 0');
        }
    }

    function increaseHandler() {
        if (count < 10) {
            setCount(count + 1);
        } else {
            alert('Count cannot exceed 10');
        }
    }

    function resetHandler() {
        setCount(0);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#344151]">
        <div className="bg-white shadow-md rounded-md p-8 flex flex-col gap-10 items-center">
            <div className={`text-4xl font-bold ${count !== 0 ? 'bg-green-500' : 'bg-gray-300'} p-2 rounded-md text-center w-20`}>
                {count}
            </div>
            <div className="text-xl font-bold">Increment and Decrement</div>
            <div className="flex gap-4">
                <button onClick={decreaseHandler} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"> 
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/></svg>
                    Decrease
                </button>
                <button onClick={increaseHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                    Increase
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                </button>
            </div>
            <button onClick={resetHandler} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>
        </div>
    </div>
    
    );
}

export default App;
