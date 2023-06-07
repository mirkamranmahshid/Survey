import  {BrowserRouter as Router,Route, Routes, NavLink}  from 'react-router-dom'
import Card from './components/shared/Card'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'
import Post from './components/Post'

function App() {
                return ( <FeedbackProvider>
        <Router>
        <Header />
        <div className='container'>      
           <Routes>
                    <Route   exact path='/'  element={
                        <>
                        <FeedbackForm   />
                        <FeedbackStats />
                        <FeedbackList          />
                        </>
                    }>
                         </Route>
                <Route   path='/about'   element={<AboutPage  />} />
                <Route   path='/Post/:id/:name'   element={<Post />} />
          </Routes>
       <Card> <ul className='NavShow'>
            <li> 
           <NavLink to='/'  activeClassName='active' >
              <strong>Home</strong>
            </NavLink>
       
          </li>
          <li>     <NavLink to='/about'  activeClassName='active' >
              <b>About</b>
            </NavLink></li>
        </ul> </Card>
           <AboutIconLink  />  
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App