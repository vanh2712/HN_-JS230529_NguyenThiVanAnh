import React, { useState } from 'react'
import Word from './Word'

function WordCounter() {
    
    const[wordCount, setWordCount] = useState([
        {
            id: 1,
            iconClass: "fa-solid fa-font p-3",
            name: "Word"
        },
        {
            id: 2,
            iconClass: "fa-solid fa-pen-to-square p-3",
            name: "Letter"
        },
        {
            id: 3,
            iconClass: "fa-solid fa-paragraph p-3",
            name: "Paragraph"
        },

    ]);
    const [inputText, setInputtext] = useState("");
    const inputChange = (e) => {
        setInputtext(e.target.value);
    };
    const arrInput = inputText.split('');
    const countWord = () => {
        
    };
  return (
    
    <div className='' style={{backgroundImage:"linear-gradient(to right, rgb(238, 183, 238),rgb(240, 196, 203))"}}>
        <div className=''  style={{alignItems:"center"}}>
            <h3>Word Counter</h3>
        </div>
        <ul className='d-flex justify-content-center' style={{listStyle:"none"}}>
            {wordCount.map((e, i) => (
                <li key={i} onClick={countWord} className='rounded m-3' style={{backgroundImage:"linear-gradient(to right, purple, rgb(233, 77, 212))", width:"200px"}}>
                    <Word element={e}/>
                </li>
            ))}
        </ul>
        <div>
            <textarea value={inputText} onChange={inputChange}  placeholder='Enter/Paste Your Text Here' className='form-control' style={{height:"200px"}}>
                
            </textarea>
        </div>
        <div className='m-5 pb-5'>
            <button>Click to Uppercase</button>
            <button>Click to Lowercse</button>
        </div>
    </div>
    
  )
}

export default WordCounter