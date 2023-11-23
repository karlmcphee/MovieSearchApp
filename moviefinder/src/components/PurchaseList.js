import React from 'react'
import PurchaseItem from './PurchaseItem'

const PurchaseList = ( { items }) => {
    
    const list1 = items.map(result => {
        console.log(result)
        return (
            <div style={{fontFamily: "Bree", fontWeight:"bold", fontSize: "20px"}}><li><PurchaseItem title={result.title} price={result.price} poster={result.poster} id={result.id} /></li></div>
        )
    })
    return list1
}

export default PurchaseList