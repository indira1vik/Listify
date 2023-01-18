import React from 'react'

export const Each = (props) => {

    return (
        <>
            <div className='my-5 p-5 bg-light'>
                <h5>{props.item.title}</h5>
                <p>{props.item.desc}</p>
                <span>
                    <button type="button" className="btn btn-danger btn-sm px-4 py-2"  onClick={()=>{props.onDelete(props.item)}}>Delete</button>
                </span>
                
            </div>
        </>
    )
}
