import React from 'react'
import { FaBeer,FaAmbulance } from "react-icons/fa";
import { IoFishOutline } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { GiVikingHead } from 'react-icons/gi';

function Icons() {
  return (
    <div>
        <FaBeer size='60' color='red'/>
        <FaAmbulance size='60' color='red'/>
        <IoFishOutline size='60' color='blue'/>
        <IconContext.Provider value={{color: "white", size: "20px"}}>
        <p><GiVikingHead size='60' color='white'/></p>
        </IconContext.Provider>
    </div>
  )
}

export default Icons