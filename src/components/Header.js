import React, {useState} from 'react';
import styled from 'styled-components';
import { 
    AiFillHome, 
    AiFillBell, 
    AiOutlineBars, 
    AiOutlineFileImage,
    AiOutlineSearch,
    AiOutlinePlusCircle,
    AiOutlineUserAdd,
    AiOutlineUsergroupAdd,
   } from "react-icons/ai";
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const Header = () => {

  const [burgerStatus, setBurger] = useState(false)



  return(
    <NavBar>
      
        <h4>
        <Link to="/" >
          <AiFillHome />
        </Link>
        </h4>

        <H5Item>
        <Link to="/add/new">
          <IconItem><AiOutlinePlusCircle /></IconItem>
          
          <label>
         
          Add Post</label>
          </Link>
        </H5Item>
        

        <H5Item><IconItem><AiOutlineUserAdd /></IconItem>
          <label>Add friends</label>
        </H5Item>

        <H5Item><IconItem><AiOutlineUsergroupAdd /></IconItem>
          <label>Add groups</label>
        </H5Item>

        <H5Item>
          <IconItem><AiOutlineSearch /></IconItem>
          
          <label style={{ marginLeft: "10px"}}>Search</label>
        </H5Item>

        <H5Item><IconItem><AiOutlineFileImage /></IconItem>
          
          <label style={{ marginLeft: "10px"}}>Media</label>
        </H5Item>

        <H5Item><IconItem><AiFillBell /></IconItem>
          
          <label>Notifications</label>
        </H5Item>
        
      <h4>
      <AiOutlineBars onClick={()=>setBurger(true)}/>
    </h4>

        <BurgerNav show={burgerStatus}>

        <CloseWrapper>
          <CustomClose onClick={()=>setBurger(false)}/>
        </CloseWrapper>
          
          <li><a href='#'>
            <span className="material-icons">
            manage_accounts
          </span>&nbsp;&nbsp;Manage Account
          </a></li>
          <li><a href='#'>account</a></li>
          <li><a href='#'>car</a></li>
          <li><a href='#'>children</a></li>
          <li><a href='#'>family</a></li>
          <li><a href='#'>House</a></li>
          <li><a href='#'>account</a></li>
          <li><a href='#'>car</a></li>
          <li><Link to="/about">about</Link></li>
          <li><a href='#'><span className="material-icons">
          settings
          </span>&nbsp;&nbsp;Settings</a></li>
          
        </BurgerNav>
    
    
    </NavBar>
  );
};

export default Header;
 const NavBar = styled.nav`
  background:white;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right:5%;
  height:70px;
  color:#03c6fc;
  display:flex;
  box-shadow: 2px 2px 5px 5px #888888;
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index:5;
  @media(max-width:768px){
    display: none;
  }

 h4{
   cursor:pointer;
   font-family:Helvetica Neue;
   font-weight: 600;
   font-size: 30px;
 
 }


 `
 const H5Item = styled.div`
  cursor: pointer;
 :hover{
  background-color: #ddd;
  color: black;
 }
  label{
     color:grey;
     font-size: 12px;

   }
   /* @media(max-width:768px){
    display: none;
    
  } */
 
 `
 const IconItem = styled.div`
  font-size: 25px;
  margin-left: 15px;
  margin-right: 15px;
  color: #03c6fc;
 
 `
 const BurgerNav = styled.div`
  position: fixed;
  height: fit-content;
  box-shadow: 2px 2px 5px 5px #888888;
  border-bottom-left-radius:5px;
  top:0;
  bottom: 0;
  right: 0;
  background: white;
  width:300px;
  z-index: 10;
  
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  li{
    padding: 15px;
    margin-left: 20px;border-bottom: 1px solid rgba(0, 0, 0, .2);
    align-items:center;
    display: flex;
   
    a{
    text-decoration: none;
    color: black;
    font-weight: 550;
    justify-content: flex-start;
    align-items:center;
    display: flex;
  
  }

  }
  @media(max-width:768px){
    width: 90%;
  }
 
 `
const CustomClose = styled(CloseIcon)`
 cursor: pointer;
 color: black;
 margin: 20px;

 `
const CloseWrapper= styled.div`
  display: flex;
  justify-content: flex-end;
 `

 
 