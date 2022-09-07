import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Typography from "../../Funcss/Components/Typography"
import Container from "../../Funcss/Components/Container"
import Breadcrumb from "../../Funcss/Components/Breadcrumb"
import Button from "../../Funcss/Components/Button"
import Icon from "../../Funcss/Components/Icon"
import Card from "../../Funcss/Components/Card";
import Input from '../../Funcss/Components/Input';
import IconicInput from '../../Funcss/Components/IconicInput';
import Div from '../../Funcss/Components/Div';
import Section from '../../Funcss/Components/Section';
import Grid from '../../Funcss/Components/Grid';
import Col from '../../Funcss/Components/Col';
import Navbar from './../navBar';
import { useState,useEffect } from 'react'


export default function Book() {
    const [title, settitle] = useState("")
    const [isbn, setisbn] = useState("")
    const [author, setauthor] = useState("")
    const [bookCode, setbookCode] = useState("")
    const [category, setcategory] = useState("")
    const [books, setbooks] = useState([])
    const [categories, setcategories] = useState([])
    useEffect(() => {
        if(localStorage.getItem("books")){
            setbooks(
            JSON.parse(
                localStorage.getItem("books")
            )
            )
        }
        if(
            localStorage.getItem("categories")  
        ){
            setcategories(
                JSON.parse(
                    localStorage.getItem("categories") 
                )
            )
        }
    },[])
    
const HandleAddBook = ()=>{
if(title && isbn && author && bookCode && category){
    books.push(
        {
            title:title,
            isbn:isbn,
            author:author,
            bookCode:bookCode,
            category:category
        }
    )
new Promise((resolve,reject)=>{
localStorage.setItem("books",
    JSON.stringify(books)
)
    resolve()
}).then(()=>{window.location.assign("/books")})
}else{
    alert("Make sure to enter all details.")
}
}
  return (
    <div className="bgHome">
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
<Navbar />
   <div className="main">
      
<Card funcss="width-600-max center white round-edge padding-20 form">
<Div funcss="row-flex padding">
<div className="padding">
    <Icon icon="icon-notebook" size={3} color="primary" />
</div>
<div className="padding">
<Typography heading="h1" text="New Book" />
</div>
</Div>
<Grid>
<Col sm={12} md={6} lg={6} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
    <Icon icon="icon-notebook" color="primary" />
<Input type="text" label="Title" funcss="full-width" bordered={true} onChange={(e)=>settitle(e.target.value)} />
</IconicInput>
    </Col>
    <Col sm={12} md={6} lg={6} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
    <Icon icon="icon-check" color="primary" />
<Input type="text" label="ISBN Number" funcss="full-width" bordered={true}   onChange={(e)=>setisbn(e.target.value)}/>
</IconicInput>
    </Col>
    <Col sm={12} md={6} lg={6} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
    <Icon icon="icon-user" color="primary" />
<Input type="text" label="Author" funcss="full-width" bordered={true}   onChange={(e)=>setauthor(e.target.value)}/>
</IconicInput>
    </Col>
    <Col sm={12} md={6} lg={6} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
    <Icon icon="icon-lock" color="primary" />
<Input type="text" label="Book Code" funcss="full-width" bordered={true}   onChange={(e)=>setbookCode(e.target.value)}/>
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
    <select className='input bordered full-width'  onChange={(e)=>setcategory(e.target.value)}>
    <option>select category</option>
     {
         categories ? 
         categories.map(docs=>(
            <option value={docs.category} key={docs.category}>{docs.category}</option>
         ))
         :
         <option>There is not category</option>
     }
    </select>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
        <Button text="Add Book" color="white" bg="primary" funcss="full-width"
        onClick={HandleAddBook}
        />
    </Col>
</Grid>

</Card>

   </div>

    </div>
  )
}
