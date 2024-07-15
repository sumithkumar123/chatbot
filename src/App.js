import './App.css';
import Chatbot from './components/Chatbot';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/process_question" element={<Chatbot />} />
  
      </Routes>
  </BrowserRouter>  );
}

export default App;
