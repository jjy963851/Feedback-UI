import FeedbackItem from './Feedbackitem'

function FeedbackList({feedback}){
    if(!feedback || feedback.length ===0){
            return <p>No feedBack yet</p>
        }

return <div className ='feedback-list'>
    {feedback.map((item)=>(
        <FeedbackItem key = {FeedbackItem.id} item={item}/>
    ))}
    </div>
}

export default FeedbackList