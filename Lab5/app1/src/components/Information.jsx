import React from 'react'

export const Information = (props) => {
    return (
        <div>
            <p> I am from {props.home} </p>
            <p> I study {props.study} </p>
            <p> I like {props.like} </p>
        </div>
    )
}
