import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from './Slice/productSlice'

const restaurantStore = configureStore({
    reducer:{
        RestaurantReducer : restaurantSlice,
    }
})

export default restaurantStore