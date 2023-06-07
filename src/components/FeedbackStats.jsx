import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats(){
    const {feedback} = useContext(FeedbackContext)
    //Calculate rating average
    let average = feedback.reduce((acc, cur) => {
               return acc+ cur.rating
    }, 0 )/ feedback.length
    average = average.toFixed(2).replace(/[.,]0$/, '')
    return (
        <div className="feedback-stats">
            <h4>دیدگاه : { feedback.length} تا </h4>
            <h4> میانگین امتیازها:  {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


export default FeedbackStats