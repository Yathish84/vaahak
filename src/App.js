import React,{useState} from 'react';
import './App.css';
import Header from './Header'
import Banner from './Banner'
import Payments from './Payments'
import Bannerthree from './Bannerthree'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import FinalPage from './FinalPage';

function App() {
  const [data,setData]=useState(
    {
      sourcelocation:'',
      destination:'',
      entercartype:'',
      numberoftravellers:'',
      cost:'',
      phonenumber:'',
      enteryourname:'',
      enterremarks:''
    
     
  }
  )
  
  
  return (
    <Router>
    <div className="App">
      <Route exact path="/">
      <Header />
      <Banner data={data} setData={setData} />
      </Route>
      <Route path="/Payments">
      <Header />
        <Payments data={data} setData={setData} />
      </Route>
      <Route path="/Verify">
        <Header />
        <Bannerthree data={data} setData={setData}/>
      </Route>
      <Route path="/final">
        <Header />
        <FinalPage data={data} setData={setData} />
      </Route>
    </div>
    </Router>
  );
}

export default App;
