import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { leftList } from '../ProjectData'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../App.css'

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    
  return (
    <React.Fragment>
        <Wrapper >
            <LeftHeaderPart>
              <Logo src="https://github.com/tommygebru/spacex/blob/master/spacexlogo1.png?raw=true"/>
              <Nav>
              {leftList.map((item, index) => {
              return (
                <List key={index}><ItemLink href="#">{item}</ItemLink></List>
              );
            })}
              </Nav>
            </LeftHeaderPart>
            
            <RightHeaderPart>
                <ShopLink href="#">shop</ShopLink>
                
                <FaIcons.FaBars />
                
            </RightHeaderPart>
        </Wrapper>
        {/* <SideNav>
           <AiIcons.AiOutlineClose />
           <ul>
               <li><a href="#">Mission</a></li>
               <li><a href="#">launches</a></li>
               <li><a href="#">careers</a></li>
               <li><a href="#">updates</a></li>
               <li><a href="#">shop</a></li>
           </ul>
        </SideNav> */}
    </React.Fragment>
  )
}

export default Header

const Wrapper = styled.div `
  width: 100%;
  heigth: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  padding: 0 50px;
`

const LeftHeaderPart = styled.div`
 display: flex;
 align-items: center;  
 justify-content: center;
`


const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 20px
`

const List = styled.li`
  margin-right: 12px
`

const ItemLink = styled.a`
  text-decoration: none;
  text-transform: UpperCase;
  color: #fff;
`


const Logo = styled.img `
 width: 200px;
 
`

const RightHeaderPart = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ShopLink = styled.a`
  margin-right: 20px;
`

// const SideNav = styled.div`
//   height: 100vh;
//   width: 300px;
//   background: #000;
//   position: fixed;
//   top: 0;
//   right: 0;
//   display: flex;
//   justify-content: flex-end;

//     ul {
//         margin-top: 50px;
//         padding-right: 10px;
//     }  

//     li {
//         margin-bottom: 20px;
//          border-bottom:
//         1px solid #fff;
//     }
// `

