import React from 'react'
import NewYear from './components/NewYear'
import 'bootstrap'
import './index.css'
import Wedding from './components/Wedding'
import Bootcamp from './components/Bootcamp'
export default function App() {
  return (
    <div className="app container">
      <NewYear/>
      <Wedding/>
      <Bootcamp/>
    </div>
  );
}

