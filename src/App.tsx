import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="bg-gray-700 h-screen">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
