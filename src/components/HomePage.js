import React, { useRef } from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { setUserId } from '../redux/result_reducer'
import '../styles/HomePage.css'

export default function HomePage() { 
    const inputRef = useRef(null)
    // const dispatch = useDispatch()


    // function startQuiz(){
    //     if(inputRef.current?.value){
    //         dispatch(setUserId(inputRef.current?.value))
    //     }
    // }

  return (
    <div className='container'>
        <h1 className='title text-light'>Civic Quiz Application</h1>

        <ol>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>You can review and edit your answers before submitting.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} type="text"className="userid" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>

    </div>
  )
}
