

import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; 

function Chatbot() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) {
      return; 
    }

    try {
      const response = await axios.post('https://6ef0-34-90-19-28.ngrok-free.app/process_question', {
        question: inputText
      });
      const responseMessage = response.data.answer;

      setChatHistory([...chatHistory, { isUser: true, message: inputText }, { isUser: false, message: responseMessage }]);
      setInputText(''); 
      setError(null);
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`chat-message ${message.isUser ? 'user' : 'bot'}`}>
            {message.message}
          </div>
        ))}
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
