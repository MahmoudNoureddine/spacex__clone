import React from 'react'
import Header from './Header'
import './Section.css'
import styled from 'styled-components'


function Section({mainhead, subhead,btntext, background}) {
  return (
    <>  
       
       <section 
       
       className='section'>
         <div className="section-content">
             <p>{mainhead}</p>
             <h1>{subhead}</h1>
             <button>{btntext}</button>
         </div>
       </section>


    </>

  )
}

export default Section

const section = styled.div `
  background
`
    
