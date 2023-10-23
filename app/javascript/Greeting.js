import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchMessage } from './redux/messageSlice';

const Greeting = () => {
    const messages = useSelector((state) => state.messages)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessage());
    })

  return (
    <div>
        <h1>{messages}</h1>
    </div>
  )
}

export default Greeting
