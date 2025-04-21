import React, { useState } from 'react';
import './App.css';
import { Outlet} from 'react-router-dom';
import TopBar from "./components/topBar.js";
import NavLeft from "./components/NavLeft.js"

function App() {
  const [isOpen, setIsopen] = useState(true);

  const ToggleBtn = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

      <div className='parentDiv sidebarmbl dark:bg-[#051534]'>
        <TopBar ToggleBtn = {ToggleBtn} />
        <div className='flex pt-[60px] site-wholespace'>
          <div className= {` bg-[#ffffff] dark:bg-[#0A1D42] pb-4 sidebar leftSide ${isOpen == true ? 'active' : ''}`}>
            <NavLeft isOpen={isOpen}/>
          </div>
          <main className={`rightSide bg-[#fff]  dark:bg-[#051534] ${isOpen == true ? 'w-[100%] pl-[250px]' : '!w-[100%] pl-[100px]'}`}>
            <Outlet context={[isOpen]} />
          </main>
        </div>
      </div>

      

  );
}

export default App;
