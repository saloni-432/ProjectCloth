import React from 'react'
import HomeItem from './HomeItem';


function HomeList() {
    const Items= [
        {
          title: 'hats',
          imageUrl: 'https://i.pinimg.com/originals/5a/8e/c1/5a8ec1d20fb2b443cda141bc49876442.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
    return (
        <div   className="HomeItem_ListContainer">
            <div className="HomeItem_Grid">
                {Items.map(el=><HomeItem  key={el.id} {...el}/>)}

            </div>
            
        </div>
    )
}

export default HomeList
