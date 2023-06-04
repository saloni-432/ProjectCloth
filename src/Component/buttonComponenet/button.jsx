import React from 'react'

function Button({children,...otherprops}) {
    return (
        <button  className="cust-button" {...otherprops}>{children}</button>
    )
}

export default Button
