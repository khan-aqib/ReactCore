import React from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";
import MyCard from "./components/MyCard";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React JS App Component</h1>
      <MessageCard/>
      <MyCard/>
      <News/>
    </div>
  );
}

export default App;
