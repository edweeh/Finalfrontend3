import React from 'react'
import './Sidebar.css';
import CottageIcon from '@mui/icons-material/Cottage';


const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
    <a href='/Adminhome'><li>HOME</li></a>
   </ul>
    Registrations
   <ul>
    <a href='/Category'><li>Category</li></a>
    <a href='/Pet'><li>Pet</li></a>
   </ul>
   View
   <ul>
   <a href="/Categoryview"><li>Category View</li></a>
   <a href="/Petview"><li>Pet View</li></a>
  
  </ul>

  <ul><a href='/'><li>Log Out</li></a></ul>

  <ul><a href='/Home1'><li><CottageIcon/></li></a></ul>
  
  
</div>
  )
}

export default Sidebar
