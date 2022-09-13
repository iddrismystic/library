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
  const [borrows, setborrows] = useState([])
  const [user, setuser] = useState(null)
  const [books, setbooks] = useState([])
  useEffect(() => {
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
  },[])

  const Return = (book)=>{
    new Promise((resolve, reject) => {
      books.push(book)
      resolve()
    }).then(()=>{
      localStorage.setItem("books" , JSON.stringify(books))

      localStorage.setItem("borrows" , JSON.stringify(
        borrows.filter(docs=>{
          if(docs.bookCode.toString() != book.bookCode && docs.email.toString() === book.email ){
            return docs
          }
        })
      
        ))
      
    })
    alert("Book returned")
    window.location.reload()
  }
return (
<div>
<div className="dashboard">
    <Navbar />
    <div className="main ">
        <div className="container">
    <p>
    <div className="h1">
            My  Books
          </div>
          <p className='text-bold'>
            Welcome, {user}
          </p>
    </p>
            <Card funcss="round-edge padding">
                
<div className="horizontal-scroll">
  <table className="table text-small">
    <tr>
      <th>Title</th>
      <th>ISBN Number</th>
      <th>Category</th>
      <th>Author</th>
      <th>Book Code</th>

    </tr>
{
  borrows ?
borrows.filter((filt)=>{
 if (filt.email === user) {
    return filt
 }
}
)
.map((doc)=>(
  <tr key={doc.isbn}>
  <td>
  <Typography text={doc.title} />
  </td>
  <td>{doc.isbn}</td>
  <td>{doc.category}</td>
  <td>{doc.author}</td>
  <td>{doc.bookCode}</td>
  <td>
    <button className="button indigo text-white" onClick={()=>Return(doc)}>Return</button>
  </td>
</tr>
))
:
"No books"
}
  </table>
</div>

            </Card>
        </div>

    </div>
</div>
</div>
)
}
