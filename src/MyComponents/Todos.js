import React from 'react'
import { Each } from "./Each.js";

export const Todos = (props) => {
    return (
        <>
            <div className="container">
                <h4 className='text-center my-5'>List</h4>
                {props.list.length === 0 ? <div className='text-center'>You have no work to do</div> :
                    props.list.map((item) => {
                        return <Each item={item} key={item.sno} onDelete={props.onDelete} />
                    })}
            </div>
        </>
    )
}
