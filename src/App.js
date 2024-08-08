import './App.css';import React, { useState } from 'react'
import Nav from './Components/Nav';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App =()=>{
const pageSize=6;
//419440d3e346449188b1f8b2d8977afe
// const apiKey=process.env.REACT_APP_NEWS_API
//       state= {
//       progress:0
//       }
    //  const setProgress=(progress)=>{
    //     this.setState({progress:progress})
    //   }
    const [progress, setProgress] = useState(0)
 
 
    return (
      <div>
        <Router>
      <Nav/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
       
      />
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress}   key="technology"pageSize={pageSize} country="in" category="technology"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress}   key="business"pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment"pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress}   key="health"pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress}   key="science"pageSize={pageSize} country="in" category="science"/>}/> 
          <Route exact path="/sports"element={<News setProgress={setProgress}   key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
        
        </Routes>
      </Router>
      </div>
    )
  }


  export default App;