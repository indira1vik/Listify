import React, { useState } from 'react'

export const Addit = ({addtolist}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleDesc(event) {
        setDesc(event.target.value);
    }

    const clickit = (e) => {
        e.preventDefault();
        if (!title || !desc){
            alert("Fill Title and desc.");
        }
        addtolist(title,desc);
    }

    let boxStyle = {
        borderRadius: '10vh',
        background:'linear-gradient(270deg, #4ca2cd, #67B26F)',
        border:'0px'
    }
    
    return (
        <>
            <form className='container text-center' onSubmit={clickit}>
                <div className="input-group input-group-lg py-5">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
                    <input type="text" value={title} onChange={handleTitle} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
                <div className="input-group input-group">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Descritption</span>
                    <input type="text" value={desc} onChange={handleDesc} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
                <span>
                <button type="submit" className="btn btn-primary py-3 px-5 m-5" style={boxStyle}>Add to list</button>
                </span>
            </form>
        </>
    )
}
