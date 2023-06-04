import React from 'react'
import { withRouter } from 'react-router-dom'

function HomeItem({title,imageUrl,id,history,match}) {
    return (
        <div className="Outer_Container">
        <div style={{backgroundImage: `url(${imageUrl}) ` } }className="background-image" onClick={()=>history.push(`${match}/${title}`)} >
            <div  className="Inner_Container">
                <div style={{ fontSize:"26px" } }>{title.toUpperCase()}</div>
                <div>SHOP NOW</div>
            </div>
            
        </div>
        </div>
    )
}

export default withRouter(HomeItem);
