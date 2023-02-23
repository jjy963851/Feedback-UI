import React from 'react'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import{useState} from 'react'
import FeedbackData from './components/FeedBackData'
import Card from './components/shared/Card'

function App(){
    const[feedback, setFeedback] =useState(FeedbackData)

    return(
        <>
        <Header />
        <div className = 'container'>
            <FeedbackList feedback={feedback}/>
            <Card>
                Hello world
            </Card>

        </div>
    </>
  )
}

export default App