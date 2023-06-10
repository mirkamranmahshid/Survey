import { createContext, useState} from "react"
import {v4 as uuidv4} from 'uuid'
import feedbackData from '../data/FeedbackData'
const FeedbackContext = createContext()
//import { useEffect } from "react"
export const FeedbackProvider =({children}) => {
    //const [isLoading, setIsLoading]= useState(true)
    const [feedback, setFeedback]=useState(feedbackData)
    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{}, 
        edit:false
    })
//useEffect(()=>{  fetchFeedback()   },[])
//Fetch feedback
/* const fetchFeedback = async()=>{
    const response =await fetch(`http://localhost:5000/feedback?_sort=id$_order=desc`)
    const data= await response.json()
    setFeedback(data)
    setIsLoading(false)
} */
//Delete feedback    
        const deleteFeedback = (id) =>{
            if(window.confirm('این دیدگاه ثبت شده است آیا از پاک کردن آن اطمینان دارید؟')){
                if(id<Math.ceil(feedback.length/2)+Math.ceil(feedback.length/3)+1) {window.alert('You need administrator permission ....\n نیاز به مجوز مدیر دارید')} 
                 else {
                setFeedback(feedback.filter((item) => item.id !==id))}
                                                                                               }  
                                      }
                          const addFeedback = (newFeedback) => { 
                                 newFeedback.id = uuidv4()
                                  setFeedback([newFeedback, ...feedback])
                                                                } 
                                                    //set item to be updated                                   
                                             const editFeedback= (item) =>{
                                                  setFeedbackEdit({
                                                                      item,
                                                                      edit:true
                                                                  })
                                                                          } 
                                //Update feedback
                      const updateFeedback =(id, updItem)=>{
                        setFeedback(feedback.map((item)=>item.id===id ? {...item, ...updItem} : item ))
                      }
        return <FeedbackContext.Provider  value={{
feedback,
//isLoading,
feedbackEdit,
deleteFeedback,
addFeedback,
editFeedback,
updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext