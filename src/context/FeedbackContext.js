import { createContext, useState, useEffect} from "react"
//import {v4 as uuidv4} from 'uuid'
//import feedbackData from '../data/FeedbackData'
const FeedbackContext = createContext()

export const FeedbackProvider =({children}) => {
    const [isLoading, setIsLoading]= useState(true)
    const [feedback, setFeedback]=useState([])
    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{}, 
        edit:false
    })
useEffect(()=>{  fetchFeedback()   },[])
//Fetch feedback
 const fetchFeedback = async()=>{
    const response =await fetch(`https://my-json-server.typicode.com/mirkamranmahshid/survey/feedback?_sort=id$_order=desc`)
    const data= await response.json()
    setFeedback(data)
    setIsLoading(false)
} 
//Delete feedback    
        const deleteFeedback =async (id) =>{
            if(window.confirm('این دیدگاه ثبت شده است آیا از پاک کردن آن اطمینان دارید؟')){
                if(id<Math.ceil(feedback.length/2)+Math.ceil(feedback.length/3)+1) {window.alert('You need administrator permission ....\n نیاز به مجوز مدیر دارید')} 
                 else {
                 await fetch(`/feedback/$(id)`, {method:'DELETE' })   
                setFeedback(feedback.filter((item) => item.id !==id))}
                                                                                               }  
                                      }
                          const addFeedback = async (newFeedback) => { 
                            const response =await fetch('/feedback', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json'},
                                body: JSON.stringify(newFeedback)
                            })
                                 const data =await response.json()
                                  setFeedback([data, ...feedback])
                                                                } 
                                                    //set item to be updated                                   
                                             const editFeedback= (item) =>{
                                                  setFeedbackEdit({
                                                                      item,
                                                                      edit:true
                                                                  })
                                                                          } 
                                //Update feedback
                      const updateFeedback =async (id, updItem)=>{ const response= await fetch(`/feedback/${id}`, {
                        method: 'PUT',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(updItem)
                      })
                      const data= await response.json()
                        setFeedback(feedback.map((item)=>item.id===id ? {...item, ...data} : item ))
                      }
        return <FeedbackContext.Provider  value={{
feedback,
isLoading,
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