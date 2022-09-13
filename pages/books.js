import List from '../Funcss/Components/List';
import ListItem from '../Funcss/Components/ListItem';
import RowFlex from '../Funcss/Components/RowFlex';
import Div from '../Funcss/Components/Div';
import Icon from '../Funcss/Components/Icon';
import Card from '../Funcss/Components/Card';
import Avatar from '../Funcss/Components/Avatar';
import Typography from '../Funcss/Components/Typography';
import Middle from '../Funcss/Components/Middle';
import Hr from '../Funcss/Components/Hr';
import Section from '../Funcss/Components/Section';
import Link from 'next/link';
import Navbar from './navBar';
import React, { PureComponent } from 'react';
import { useState,useEffect } from 'react'

export default function Books() {
  const [books, setbooks] = useState([])
  const [borrows, setborrows] = useState([])
  const [user, setuser] = useState(null)
  const [search, setsearch] = useState("")
  const [getBooks, setgetBooks] = useState(true)
  useEffect(() => {
    if(getBooks){
      if(localStorage.getItem("books")){
        setbooks(
        JSON.parse(
            localStorage.getItem("books")
        )
        )
    }

    
    if(localStorage.getItem("borrows")  ){
      setborrows(
          JSON.parse(
              localStorage.getItem("borrows") 
          )
      )
  }
  setuser(JSON.parse(
    sessionStorage.getItem("currentUser")
  ))
  setgetBooks(false)
    }
  })
  const HandleBorrow = (book)=>{
var fullName = prompt("Full Name : ", "");
var StudentId = prompt("Student Id: ", "");
var dateReturn = prompt("Return Date : ", "");

if(fullName && StudentId && dateReturn){
    borrows.push(
      {
        email:user,
        title:book.title,
        isbn:book.isbn,
        category:book.category,
        author:book.author,
        bookCode:book.bookCode,
        fullName:fullName,
        StudentId:StudentId,
        dateReturn:dateReturn
      }
    )
new Promise ((resolve , reject)=>{
localStorage.setItem("borrows" , JSON.stringify(borrows))

localStorage.setItem("books" , JSON.stringify(
books.filter(docs=>{
  if(docs.bookCode.toString() != book.bookCode){
    return docs
  }
})

))
  resolve()
}).then(()=>{
  alert(user + ": Book borrowed successfully.");
   window.location.assign("/user")
})
}else{
  alert("Make sure to enter all details")
}
  }
return (
<div>
<div className="dashboard">
    <Navbar />
    <div className="main ">
        <div className="container">
    <p>
    <div className="h1">
            Our Books
          </div>
          <p>
            You can borrow a book for free from us.
          </p>

    </p>
          <div className="padding-top-20">
            <p className="">
              <input type="text" onChange={(e)=>setsearch(e.target.value)} className="card white input roundEdge borderless full-width" placeholder='Search'/>
            </p>
            <div className='padding-top-20'>
            <Card funcss="round-edge padding">
                
                <div className="horizontal-scroll">
                  <table className="table text-small">
                    <tr>
                      <th>Title</th>
                      <th>ISBN Number</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Book Code</th>
                      <th>Borrow Book</th>
                    </tr>
                {
                  books ?
                books.filter(docs=>{
                  if(search === ""){
                    return books
                  }else if(
                    search.toString().trim().toLowerCase().includes(docs.isbn.toString().trim().toLowerCase().slice(0,search.length)) ||
                    search.toString().trim().toLowerCase().includes(docs.title.toString().trim().toLowerCase().slice(0,search.length)) ||
                    search.toString().trim().toLowerCase().includes(docs.category.toString().trim().toLowerCase().slice(0,search.length)) ||
                    search.toString().trim().toLowerCase().includes(docs.author.toString().trim().toLowerCase().slice(0,search.length)) ||
                    search.toString().trim().toLowerCase().includes(docs.bookCode.toString().trim().toLowerCase().slice(0,search.length)) 
                   // search.toString().trim().toLowerCase().includes(docs.shelve.toString().trim().toLowerCase().slice(0,search.length))
                  ){
                    return docs;
                  }
                }).map((doc)=>(
                  <tr key={doc.isbn}>
                  <td>
                  <Typography text={doc.title} />
                  </td>
                  <td>{doc.isbn}</td>
                  <td>{doc.category}</td>
                  <td>{doc.author}</td>
                  <td>{doc.bookCode}</td>
                  {
                    doc.borrowed ?
                    <td>Borrowed</td>
                    :
                    <td>
                    <button className='button success text-white card' onClick={()=>HandleBorrow(doc)}>Borrow</button>
                  </td>
                  }
                </tr>
                ))
                :
                "No books"
                }
                {
                  borrows &&
                  borrows.map(doc=>(
                    <tr key={doc.isbn}>
                    <td>
                    <Typography text={doc.title} />
                    </td>
                    <td>{doc.isbn}</td>
                    <td>{doc.category}</td>
                    <td>{doc.author}</td>
                    <td>{doc.bookCode}</td>
                      <td className='text-small text-bold'>Borrowed by {doc.email}</td>
                  </tr>
                  ))
                }
                  </table>
                </div>
                
                            </Card>
            </div>
          </div>
        </div>

    </div>
</div>
</div>
)
}
