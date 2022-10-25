import { configureStore, createSlice } from '@reduxjs/toolkit'
import {current} from '@reduxjs/toolkit'

//state 만들기
let user = createSlice({
  name: 'user',
  initialState: { name: '페이', age: 20 },
  reducers: {
    changeName(state) {
      // console.log('state=',state) // proxy로 보임
      console.log('current(state)=',current(state))
      state.name = '아롱'
    },
    addAge(state, action) {
      console.log('current(state)=',current(state))
      state.age += action.payload
    }
  }
})
let product = createSlice({
  name: 'product',
  initialState: 'wheel'
})

// state 등록
export default configureStore({
  reducer: {
    user: user.reducer,
    product: product.reducer
  }
})
export let { changeName,addAge } = user.actions // slice의 이름.actions 하면 state 변경함수가 전부 가져와진다.