import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from  '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

  const hamburgerMenu = window.innerWidth <= 900 ? true : false;
  const [openedMenu , setOpenedMenu] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="The Fit Club Logo" className='logo' />

      {
        (openedMenu === false && hamburgerMenu === true) ? 
        (<div          
          style={{
            backgroundColor : 'var(--appColor)',
            padding : '0.5rem',
            borderRadius : '5px'
          }}
          
          onClick = {() =>
          {
            setOpenedMenu(true)
          }}
          >
            <img src={Bars} alt="Hamburger Menu" style={{width : '1.5rem' , height : '1.5rem'}}/>
          </div>) 
        : 
        (<ul className='header-menu'>
          <li>
            <Link
              onClick={()=> setOpenedMenu(false)} 
            to='Hero'
            span={true}
            smooth = {true}
            >Home
            </Link>
          </li>
          <li>
            <Link
              onClick={()=> setOpenedMenu(false)} 
              to='programs'
              span={true}
              smooth = {true}
            >
            Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={()=> setOpenedMenu(false)} 
              to='reasons'
              span={true}
              smooth = {true}
            >
            Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={()=> setOpenedMenu(false)} 
              to='plans'
              span={true}
              smooth = {true}
            >
            Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={()=> setOpenedMenu(false)} 
              to='tesimonials'
              span={true}
              smooth = {true}
            >
            Testimonials
            </Link>
            </li>
        </ul> )
      }

      
      
    </div>
  )
}

export default Header;
