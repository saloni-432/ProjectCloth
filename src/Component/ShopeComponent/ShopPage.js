import React, { useEffect, useState } from 'react'
import ShopLists from './ShopLists';

function ShopPage() {
    const[Data,setData]= useState([]);
    useEffect(() => {
        fetch('https://api.npoint.io/2ad6b649f57054860307')
        .then(response=>response.json())
        .then(resp=>setData(resp))
    }, [])
    return (
        <div className="Container">
            {Data.map(el=><ShopLists key={el.id} {...el}/>)}
            
        </div>
    )
}

export default ShopPage
