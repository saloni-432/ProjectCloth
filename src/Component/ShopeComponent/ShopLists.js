import React, { useEffect, useState } from 'react'
import ShopItem from './ShopItem'

function ShopLists({title,items}) {
    const [randArr, setrandArr] = useState([]);
    const myset=new Set();
    useEffect(() => {
        while(myset.size!==4) {
            var num=Math.floor(Math.random()*8) + 1;
            myset.add(num);
            
        }
        const myArr = Array.from(myset);
        setrandArr(myArr);
    }, [])
    return (
        <div>
            <div style={{fontSize:"30px",fontWeight:"bold"}}>{title}</div>
            <br/>
            <div className="Item_GridContainer">
                
            {items.map((prod)=>
            (randArr.some((el)=>el===prod.id)) &&<ShopItem key={prod.id} {...prod}/>)}
            


            </div>
            <br/>
            <br/>
            
        </div>
    )
}

export default ShopLists
