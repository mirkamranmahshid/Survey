import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    
    const [text, setText] =useState('')
    const [rating, setRating] =useState(10)
    const [btnDisabled, setBtnDisabled] =useState(true)
    const [message, setMessage] =useState('')
    const {addFeedback,feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    useEffect(()=>{
      if(feedbackEdit.edit===true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])   
    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('خواهشمندیم پیام بیشتر از 10 کاراکتر باشد تا دکمه ارسال فعال شود')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
          e.preventDefault()
          if(text.trim().length > 10) {
            const newFeedback = { text, rating}
            if(feedbackEdit.edit===true){
              updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
              addFeedback(newFeedback)
            }
           
            setText('')
          }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> خواهشمندیم چند ثانیه از زمان با ارزش خود را به ما بدهید و با امتیاز دادن در مسیر پیشرفت ما را راهنمایی کنید </h2>
        {/* @do - rating select component */}
            <RatingSelect  select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleTextChange} type='text' placeholder=' خواهشمندیم دیدگاه خود را بنویسید'  value= {text} />
            <Button type='submit' isDisabled={btnDisabled}>ثبت دیدگاه</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm