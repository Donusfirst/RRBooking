import React from 'react'
import Cards from 'react-credit-cards'
import Navbar from '../Components/Navbar';
import 'react-credit-cards/es/styles-compiled.css'


function Pagos() {
  return (
    <div>
          <Navbar/>
    <div className='card'>
        <div className='card-body'>
              <Cards
          number={"12344567890123456"}
          name={"Ignacio Rivero"}
          expiry={"1234"}
           focus="name"
             />
        </div>
    </div>
    </div>

  )
}

export default Pagos

