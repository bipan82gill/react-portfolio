import React from 'react';

const Button = (props) => {
return(
    <button type ="submit" className ="btn btn-white">
        {props.children}
    </button>
)
}
export default Button
