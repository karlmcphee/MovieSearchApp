import {createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addMovie(state, action) {
            const newItem = action.payload;
       //     const existingItem = state.items.find(item => item.id === newItem.id)
       // if (!existingItem) {
            state.items.push({ 
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                poster: newItem.poster})
                state.totalQuantity++;
                state.totalPrice+= newItem.price;
     //   } else {
      //      existingItem.quantity = existingItem.quantity+1;
       //     existingItem.totalPrice = existingItem.totalPrice + newItem.price

    //    }
    },
        removeMovie(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item=> item.id === id);
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;
            state.items = state.items.filter(item => item.id !== id)
        //    if (existingItem.quantity === 1) {
        //        state.items = state.items.filter(item => item.id !== id)
        //    } else {
             //   existingItem.quantity -= 1
              //  existingItem.totalPrice = existingItem.totalPrice-existingItem.price
            
        },

        clearCart(state, action) {
                Object.assign(state, {
                    items: [],
                    totalQuantity: 0,
                    totalPrice: 0
                },)
        }

     /*       state.items.push(
                {
                    id: '1',
                    title: 'hi',
                    price: 10,
                    poster: 'hi'

                } */
            //)
       // }
        
    }
})

export const movieActions = movieSlice.actions
export default movieSlice