import './App.css';
import { MoviesList }  from "./Movies/MoviesList.js";
import { MovieDetail } from "./Movies/MovieDetail.js"
import { BrowserRouter as Router,  Route , Routes } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route path="/" element={<MoviesList />  }  /> 
          <Route path="/Movie/:id" element={<MovieDetail />} /> 
        </Routes>
      </Router>
    </div>
  )
}



export default App;  // This will export the main component
