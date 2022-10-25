import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addAge, changeName } from "../store/Store.js"

const Home = () => {
    let state = useSelector((state) => { return state })
    console.log('state=',state)
    let user = state.user.name
    let age = state.user.age

    let dispatch = useDispatch();

    return (
        <React.Fragment>
            {user}
            {age}
            <button
                onClick={() => {
                    dispatch(changeName())
                }}
            >
                이름바꾸기 버튼
            </button>
            <button
                onClick={() => {
                    dispatch(addAge(20))
                }}
            >
                나이 버튼
            </button>
        </React.Fragment>
    )
}



export default Home;