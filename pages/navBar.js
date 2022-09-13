import List from '../Funcss/Components/List';
import ListItem from '../Funcss/Components/ListItem';
import RowFlex from '../Funcss/Components/RowFlex';
import Div from '../Funcss/Components/Div';
import Icon from '../Funcss/Components/Icon';
import Card from '../Funcss/Components/Card';
import Avatar from '../Funcss/Components/Avatar';
import Typography from '../Funcss/Components/Typography';
import Section from '../Funcss/Components/Section';
import Link from 'next/link';
import React, { PureComponent, useState ,useEffect} from 'react';

export default function Navbar() {
  const [sidebar, setsidebar] = useState("")
  const [user, setuser] = useState("")
  useEffect(() => {
      if(sessionStorage.getItem("currentUser")){
        setuser(JSON.parse(
          sessionStorage.getItem("currentUser")
        ))
      }else{
        window.location.assign("/")
      }
  },[])
  const HandlesideBar = ()=>{
    if(sidebar){
      setsidebar("")
    }else{
      setsidebar("-100%")
    }
  }
useEffect(() => {
  window.addEventListener("resize" , ()=>{
    if(screen.width > 993){
      setsidebar("")
    }
  })
}, [])

  return (
    <div className="">
   <div className=" padding">
      <nav className="navBar card  white round-edge">
        <div>
        <Typography heading="h4" text="WTU - Library" funcss="text-primary"/>
          </div>
          <div>
            <button className='button card text-indigo text-bold' onClick={()=>{
              new Promise((resolve,reject)=>{
                sessionStorage.removeItem("currentUser")
                resolve("/")
              }).then(loc=>window.location.assign(loc))
            }}>Logout</button>
          </div>
          <div className="text-center padding show-medium-down">
          <i className='lni lni-menu hover-text-red pointer absolute top-20 right-20 h4' onClick={HandlesideBar}></i>
          </div>
        </nav>
      </div>
        <div className="sideBar card white round-edge" style={{marginLeft:`${sidebar}`}}>
 
        <div className='sidebarContent'>
        <div className="text-center padding show-medium-down">
          <i className='lni lni-close hover-text-red pointer absolute top-20 right-20' onClick={HandlesideBar}></i>
          </div>
        <List>

        <ListItem>
       <Link href="/dashboard">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-graph" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Dasboard</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/books">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-notebook" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Books</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/user">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-notebook" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">My Books</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        {
          user === "admin@gmail.com" &&
          <div>
  <ListItem>
       <Link href="/add/book">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-plus" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Add Book</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>

        <ListItem>
       <Link href="/add/category">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-grid" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">New Category</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
          </div>
        }

        </List>
              </div>
        </div>
    </div>
  )
}
