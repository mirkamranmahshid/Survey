import {useParams} from 'react-router-dom'

export default function Post() {
    const prams = useParams()
  return (
    <div>
      <h1>Post {prams.id}</h1>
      <p> Name: {prams.name}</p>
    </div>
  )
}
