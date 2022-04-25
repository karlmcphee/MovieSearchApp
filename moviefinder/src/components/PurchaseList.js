import React from 'react'
import PurchaseItem from './PurchaseItem'

const PurchaseList = ( { items }) => {
    
    const list1 = items.map(result => {
        console.log(result)
        return (
            <li><PurchaseItem title={result.title} price={result.price} poster={result.poster} id={result.id} /></li>
        )
    })
    return list1
}

export default PurchaseList